/* Quote form endpoint.

   Replaces Netlify Forms. Netlify deploys on this account are credit-blocked,
   and Netlify Forms only work when the site is served by Netlify, so moving the
   site to Vercel meant the quote form had to move with it. This is the primary
   conversion path for the business, so it fails LOUD rather than silently.

   Sends through Resend using the key already on this account. Only apexaz.ai is
   a verified sender domain there, so the notification comes FROM apexaz.ai and
   sets reply-to to the customer. That keeps replies going to the right place.
   Verifying michiganshippers.com on Resend later would let the From match too.

   Attachments arrive base64 from the browser rather than as multipart, because
   Vercel parses JSON for us and multipart would need a dependency this repo has
   no package.json for. Hobby caps a request body at 4.5MB and base64 inflates
   by about a third, so the client caps files well under that and this rejects
   anything larger rather than dropping artwork on the floor quietly.
*/
const TO = "customerservice@michiganshippers.com";
const FROM = "Michigan Shippers Website <quotes@apexaz.ai>";
const MAX_TOTAL_B64 = 3_200_000; // ~2.4MB of real files, safely under the 4.5MB body cap

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body || "{}"); }
    catch (e) { return res.status(400).json({ ok: false, error: "bad_json" }); }
  }
  body = body || {};

  // Honeypot. Bots fill it, humans never see it. Return 200 so they stop retrying.
  if (String(body["bot-field"] || "").trim()) return res.status(200).json({ ok: true });

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: "name_and_valid_email_required" });
  }

  const key = (process.env.RESEND_API_KEY || "").trim();
  if (!key) return res.status(500).json({ ok: false, error: "email_not_configured" });

  const fields = [
    ["Name", name], ["Email", email], ["Phone", body.phone],
    ["Label type", body.label_type], ["Quantity", body.quantity],
    ["Deadline", body.deadline],
  ].filter(([, v]) => String(v || "").trim());

  const message = String(body.message || "").trim();

  // Attachments, validated before we build the payload.
  const atts = [];
  let total = 0;
  for (const a of (Array.isArray(body.attachments) ? body.attachments : []).slice(0, 6)) {
    const content = String(a && a.content || "");
    const filename = String(a && a.filename || "artwork").slice(0, 120);
    if (!content) continue;
    total += content.length;
    if (total > MAX_TOTAL_B64) {
      return res.status(413).json({ ok: false, error: "attachments_too_large" });
    }
    atts.push({ filename, content });
  }

  const rows = fields
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#6c7a85">${esc(k)}</td><td style="padding:4px 0"><b>${esc(v)}</b></td></tr>`)
    .join("");

  const html =
    `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#222e39">` +
    `<h2 style="margin:0 0 14px;color:#1c2c3e">New quote request</h2>` +
    `<table style="border-collapse:collapse;font-size:15px">${rows}</table>` +
    (message ? `<p style="margin:16px 0 4px;color:#6c7a85">Message</p><div style="white-space:pre-wrap;font-size:15px;border-left:3px solid #2f7dc1;padding-left:12px">${esc(message)}</div>` : "") +
    (atts.length ? `<p style="margin:16px 0 0;color:#6c7a85">${atts.length} file${atts.length === 1 ? "" : "s"} attached.</p>` : "") +
    `<p style="margin:22px 0 0;font-size:13px;color:#6c7a85">Sent from the quote form on michiganshippers.com. Reply directly to reach ${esc(email)}.</p>` +
    `</div>`;

  const text =
    "New quote request\n\n" +
    fields.map(([k, v]) => `${k}: ${v}`).join("\n") +
    (message ? `\n\nMessage:\n${message}` : "") +
    (atts.length ? `\n\n${atts.length} file(s) attached.` : "");

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM, to: [TO], reply_to: email,
        subject: `Quote request from ${name}`,
        html, text,
        attachments: atts.length ? atts : undefined,
      }),
    });
    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("resend failed", r.status, detail.slice(0, 300));
      return res.status(502).json({ ok: false, error: "send_failed" });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("resend threw", e && e.message);
    return res.status(502).json({ ok: false, error: "send_failed" });
  }
};
