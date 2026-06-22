/* Michigan Shippers Supply, help-chat AI proxy (Netlify Function).
   Holds the Gemini API key server-side (never in the browser) and relays the
   visitor's question to Google Gemini, grounded in the real business facts with
   strict no-invention guardrails. On ANY problem (no key, rate limit, API error)
   it returns { reply: null } so the website's chat.js falls back to the built-in
   scripted answers + email. That means the chat never breaks and never costs money
   beyond the free tier (over-limit just degrades to the scripted bot). */

const MODEL = process.env.GEMINI_MODEL || "gemini-1.5-flash-latest";

const SYSTEM = [
  "You are the friendly website help assistant for Michigan Shippers Supply, a family-owned custom label printer in Spring Lake, Michigan, in business since 1959.",
  "",
  "ANSWER ONLY FROM THESE FACTS:",
  "- What we print: custom labels of all kinds (product, food and packaging, candy, wine/beer/beverage, barcode and shipping labels), Keurig-compatible metallic foil lids for single-serve coffee and cocoa pods, plus durable metal and tin labels. We also do in-house custom brand and label design, print-and-apply systems, and thermal transfer printers (Sato, Datamax, Zebra) with supplies and service.",
  "- Turnaround: most orders ship in 10 days or less, the same for small first runs and large production runs. Tight deadlines: tell us and we do our best.",
  "- Minimums: none. We happily help startups and small businesses, first runs and small batches included.",
  "- Artwork files: vector is best (.AI, .EPS, .PDF, .SVG); high-resolution .PNG or .TIFF also work. No artwork? Our in-house design team builds it.",
  "- Foil/lids: yes, we still print on foil. Keurig-compatible metallic foil lids; we print for brands like Crazy Cups, Green Mountain Coffee, and Brooklyn Bean.",
  "- Materials: paper and film label stocks in many finishes, plus metal and foil.",
  "- Proof: we send a proof for approval before anything goes to press.",
  "- Location: 17369 Taft Rd, Spring Lake, MI 49456. Hours: Monday to Friday, 9:00 AM to 5:00 PM.",
  "- Shipping: we ship across the entire United States.",
  "- Contact: phone (616) 935-6680, toll-free 800-442-4639, email sales@michiganshippers.com. The Get a Quote form on the site is the fastest way to start.",
  "- Premium program: Managed Inventory and Just-in-Time, a white-glove option with a dedicated specialist who holds your labels and prints on demand so you never run out.",
  "- Compliance: decades of experience with food, beverage, and product label compliance (nutrition, ingredients, regulatory).",
  "- History: family-owned and operated since 1959 (67 years).",
  "",
  "RULES:",
  "- Keep replies to 1 to 3 short, warm sentences. Plain text only, no markdown, no bullet points, no headings.",
  "- NEVER invent or estimate a price, a specific turnaround date, a spec, or a capability that is not in the facts above. Do not make promises.",
  "- For any specific price or quote, or anything the facts above do not cover, do not guess. Say it is best handled by the team and point them to email sales@michiganshippers.com or the Get a Quote form.",
  "- Stay on the topic of Michigan Shippers Supply and its labels. If asked something unrelated, politely steer back and offer the email.",
  "- Be friendly and human, never pushy."
].join("\n");

function resp(code, obj) {
  return { statusCode: code, headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj) };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return resp(405, { reply: null, error: "method_not_allowed" });

  const key = process.env.GEMINI_API_KEY;
  if (!key) return resp(200, { reply: null, note: "no_key" }); // client falls back to scripted bot

  let body;
  try { body = JSON.parse(event.body || "{}"); } catch (e) { return resp(400, { reply: null, error: "bad_json" }); }

  const raw = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
  const contents = raw
    .filter(function (m) { return m && typeof m.text === "string" && m.text.trim(); })
    .map(function (m) {
      return { role: m.role === "assistant" ? "model" : "user", parts: [{ text: String(m.text).slice(0, 1500) }] };
    });
  // Gemini requires the conversation to start with a user turn.
  while (contents.length && contents[0].role !== "user") contents.shift();
  if (!contents.length) return resp(400, { reply: null, error: "empty" });

  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(MODEL) + ":generateContent?key=" + encodeURIComponent(key);

  try {
    const controller = new AbortController();
    const timer = setTimeout(function () { controller.abort(); }, 9000);
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM }] },
        contents: contents,
        generationConfig: { temperature: 0.3, maxOutputTokens: 320, topP: 0.9 },
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" }
        ]
      })
    });
    clearTimeout(timer);
    if (!r.ok) {
      var errText = "";
      try { errText = await r.text(); } catch (e2) {}
      return resp(200, { reply: null, note: "api_" + r.status, detail: String(errText).slice(0, 400) }); // degrade to scripted; detail for debugging
    }
    const data = await r.json();
    let reply = "";
    if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      reply = data.candidates[0].content.parts.map(function (p) { return p.text || ""; }).join("").trim();
    }
    return resp(200, { reply: reply || null });
  } catch (e) {
    return resp(200, { reply: null, note: "exception" }); // degrade to scripted
  }
};
