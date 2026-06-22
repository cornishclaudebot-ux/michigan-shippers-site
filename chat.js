/* Michigan Shippers Supply — Help chat widget.
   Self-contained, no backend. Answers common questions from a knowledge base
   grounded in the real business info; defers anything it can't answer to email.
   Copy intentionally avoids em dashes (owner preference). */
(function () {
  "use strict";

  // ---- AI backend (optional, fully graceful) ----
  // When AI_ENABLED is true, the widget asks the Netlify function (Google Gemini, free tier).
  // If that call fails for ANY reason (not configured yet, rate limit, network, API error),
  // it silently falls back to the scripted knowledge base below + the email handoff.
  // GO-LIVE: flip AI_ENABLED to true once the Netlify function + GEMINI_API_KEY are set.
  var AI_ENABLED = true;
  var AI_ENDPOINT = "/api/chat";
  var history = [];

  // ---- Knowledge base (grounded in the site's real content) ----
  var KB = [
    { keys: ["what do you print", "what do you make", "what can you print", "products", "services", "what do you offer", "types of label", "kinds of label", "what kind", "what we print"],
      a: "We print custom labels of all kinds: product labels, food &amp; packaging, candy, wine/beer/beverage, barcode &amp; shipping, and Keurig-compatible foil lids for coffee pods. We also do custom brand design, print &amp; apply systems, and thermal transfer printers. The full list is on <a href='labels.html'>Our Labels</a>." },
    { keys: ["turnaround", "how fast", "how long does", "how soon", "lead time", "deadline", "rush", "quick", "when can i get", "speed"],
      a: "Most orders ship in <strong>10 days or less</strong>, the same fast turnaround for small first runs and large production orders alike. On a tight deadline? Tell us and we'll do our best." },
    { keys: ["minimum", "minimums", "moq", "smallest order", "small order", "how few", "small batch", "small run", "minimum order"],
      a: "It depends on the product! Custom <strong>foil lids</strong> (our Keurig-compatible coffee-pod lids) have a <strong>5,000-lid minimum</strong>. Everything else has <strong>no minimum</strong>, so first runs and small batches are welcome. What are you looking to print? For specifics, our labeling specialists are happy to help at <a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a>." },
    { keys: ["file", "files", "format", "formats", "artwork", "vector", "illustrator", "design file", "eps", "pdf", "svg", "tiff", "what should i send"],
      a: "Vector files are best: <strong>.AI, .EPS, .PDF, and .SVG</strong> stay crisp at any size. High-resolution <strong>.PNG</strong> or <strong>.TIFF</strong> work too. No artwork yet? Our in-house design team will build it for you." },
    { keys: ["foil", "lid", "lids", "keurig", "k cup", "kcup", "k-cup", "coffee pod", "pods", "metal", "tin", "metallic"],
      a: "Yes! We still print on foil. We make <strong>Keurig-compatible metallic foil lids</strong> that seal single-serve coffee and cocoa cups (we print for Crazy Cups, Green Mountain Coffee, Brooklyn Bean and more), plus durable metal and tin labels most printers won't touch." },
    { keys: ["proof", "approve", "approval", "see before", "preview", "sample"],
      a: "Yes. We send a <strong>proof for your approval</strong> before anything goes to press, so you know exactly what you're getting." },
    { keys: ["material", "materials", "stock", "print on", "substrate", "paper", "film", "finish", "finishes"],
      a: "We print on paper and film label stocks in a range of finishes, plus metal and foil, including Keurig-compatible coffee-pod lids and durable tin labels." },
    { keys: ["where are you", "location", "address", "spring lake", "located", "find you", "visit", "michigan"],
      a: "We're a family-owned shop in <strong>Spring Lake, Michigan</strong> (17369 Taft Rd, Spring Lake, MI 49456), in business since 1959." },
    { keys: ["ship", "shipping", "deliver", "delivery", "nationwide", "out of state", "where do you ship", "do you ship"],
      a: "We ship <strong>across the entire United States</strong>." },
    { keys: ["hours", "open", "closed", "when are you open", "what time"],
      a: "Our hours are <strong>Monday to Friday, 9:00 AM to 5:00 PM</strong>." },
    { keys: ["contact", "phone", "call", "number", "reach", "talk to", "speak to", "get in touch"],
      a: "You can call <strong>(616) 935-6680</strong> (toll-free 800-442-4639) or email <a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a>. The <a href='about.html#contact'>Get a Quote</a> form is the fastest way to start." },
    { keys: ["quote", "price", "pricing", "cost", "how much", "estimate", "expensive", "rate", "rates", "ballpark"],
      a: "Pricing depends on your label type, size, quantity, and material, so the fastest way to a fair number is the <a href='about.html#contact'>Get a Quote</a> form (you can even upload your artwork) or email <a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a>. No pressure, and our labeling specialists will get you a fair number." },
    { keys: ["white glove", "white-glove", "premium", "managed inventory", "just in time", "just-in-time", "hold inventory", "never run out", "dedicated specialist"],
      a: "Our premium <strong>Managed Inventory &amp; Just-in-Time</strong> program is white-glove: a dedicated specialist, your labels held and ready, and printing on demand so you never run out or tie up cash. Ask about a private consultation on the <a href='index.html#programs'>home page</a>." },
    { keys: ["design help", "no design", "dont have a design", "do not have", "help with design", "create a design", "make a design", "logo"],
      a: "No problem at all. Our <strong>in-house design team</strong> builds out your label from a sketch, an idea, or nothing at all, then makes it print-ready." },
    { keys: ["compliance", "regulatory", "fda", "nutrition", "ingredient", "requirements", "legal"],
      a: "We've handled food, beverage, and product label <strong>compliance</strong> for decades (nutrition, ingredients, regulatory details), so your label passes the first time." },
    { keys: ["how long in business", "experience", "how many years", "family owned", "established", "history", "1959", "how old"],
      a: "We've been <strong>family-owned and operated since 1959</strong>, that's 67 years putting brands on the shelf." },
    { keys: ["barcode", "shipping label", "scan", "scannable"],
      a: "We print scannable, durable <strong>barcode and shipping labels</strong>, optionally branded, so products move cleanly through retail and the warehouse." },
    { keys: ["place an order", "buy", "purchase", "i need", "i want", "order"],
      a: "Happy to get that started! The best first step is a quick quote so we can size the job and price it right: use the <a href='about.html#contact'>Get a Quote</a> form (upload artwork if you have it) or email <a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a>." }
  ];
  var GREET = ["hi", "hello", "hey", "yo", "howdy", "good morning", "good afternoon", "good evening"];
  var THANKS = ["thank", "thanks", "thx", "appreciate", "awesome", "perfect"];
  var BYE = ["bye", "goodbye", "see ya", "that is all", "thats all", "no thanks"];
  var FALLBACK = "Great question, and I want to make sure you get the right answer from a real person. The quickest way is to email our team at <a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a> or use the <a href='about.html#contact'>Get a Quote</a> form. Tell us what you're printing and roughly how many, and one of our labeling specialists will get right back to you.";

  function norm(s) { return " " + String(s).toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim() + " "; }
  function ws(t, k) { return t.indexOf(" " + k.trim()) > -1; }            // word-start (lets stems match: minimum -> minimums)
  function ww(t, k) { return t.indexOf(" " + k.trim() + " ") > -1; }      // whole word (for short greeting words)

  function answer(input) {
    var t = norm(input), best = null, score = 0, i, j;
    for (i = 0; i < KB.length; i++) {
      var sc = 0;
      for (j = 0; j < KB[i].keys.length; j++) { if (ws(t, KB[i].keys[j])) { sc += KB[i].keys[j].indexOf(" ") > -1 ? 2 : 1; } }
      if (sc > score) { score = sc; best = KB[i]; }
    }
    if (score >= 1 && best) { return best.a; }
    for (i = 0; i < THANKS.length; i++) { if (ws(t, THANKS[i])) { return "You're welcome! Anything else I can help with? When you're ready, the <a href='about.html#contact'>Get a Quote</a> form takes about a minute."; } }
    for (i = 0; i < BYE.length; i++) { if (ws(t, BYE[i])) { return "Thanks for stopping by! Reach us anytime at <a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a> or (616) 935-6680."; } }
    for (i = 0; i < GREET.length; i++) { if (ww(t, GREET[i])) { return "Hi there! I can help with what we print, turnaround, file types, foil lids, and getting a quote. What are you working on?"; } }
    return FALLBACK;
  }

  // ---- UI ----
  var CHIPS = ["What do you print?", "How fast is turnaround?", "Minimum order?", "Foil lids?", "Get a quote"];
  var started = false;

  function el(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }

  var fab = el("<button class='chat-fab' aria-label='Open help chat'>" +
    "<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z'/></svg>" +
    "<span>Ask us</span></button>");

  var panel = el("<div class='chat-panel' role='dialog' aria-label='Help chat'>" +
    "<div class='chat-head'><span><b>Ask Michigan Shippers</b><small>Quick answers, or we connect you to the team</small></span><button class='chat-close' aria-label='Close chat'>&times;</button></div>" +
    "<div class='chat-body' id='chatBody'></div>" +
    "<div class='chat-chips' id='chatChips'></div>" +
    "<form class='chat-input-row' id='chatForm'><input id='chatInput' type='text' placeholder='Type your question…' autocomplete='off' aria-label='Your message' /><button type='submit'>Send</button></form>" +
    "<div class='chat-foot'>Automated quick help. For anything else, email <a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a>.</div>" +
    "</div>");

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  var body = panel.querySelector("#chatBody");
  var chipsWrap = panel.querySelector("#chatChips");
  var form = panel.querySelector("#chatForm");
  var input = panel.querySelector("#chatInput");

  function scroll() { body.scrollTop = body.scrollHeight; }
  function addMsg(html, who) { var m = el("<div class='chat-msg chat-" + who + "'></div>"); m.innerHTML = html; body.appendChild(m); scroll(); return m; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  // Canned message (e.g. the welcome): brief typing pause, then show.
  function botSay(html, delay) {
    var typing = el("<div class='chat-typing'>typing…</div>"); body.appendChild(typing); scroll();
    setTimeout(function () { typing.remove(); addMsg(html, "bot"); }, delay || 480);
  }

  // Render an AI plain-text reply safely: escape HTML, keep line breaks, linkify our email.
  function renderReply(t) {
    return esc(t).replace(/\n+/g, "<br>").replace(/sales@michiganshippers\.com/g, "<a href='mailto:sales@michiganshippers.com'>sales@michiganshippers.com</a>");
  }

  // Ask the AI backend. Resolves to a reply string, or null to signal "use the scripted answer".
  function askAI() {
    var ctrl = (typeof AbortController !== "undefined") ? new AbortController() : null;
    var t = ctrl ? setTimeout(function () { ctrl.abort(); }, 11000) : null;
    return fetch(AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-8) }),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) { if (t) clearTimeout(t); return r.ok ? r.json() : null; })
      .then(function (d) { return (d && d.reply) ? String(d.reply) : null; })
      .catch(function () { if (t) clearTimeout(t); return null; });
  }

  // Handle a user message: try AI first (if enabled); the scripted bot is always the safety net.
  function respond(text) {
    var typing = el("<div class='chat-typing'>typing…</div>"); body.appendChild(typing); scroll();
    function scripted() { typing.remove(); addMsg(answer(text), "bot"); }
    if (!AI_ENABLED) { setTimeout(scripted, 420); return; }
    askAI().then(function (reply) {
      if (reply) { typing.remove(); addMsg(renderReply(reply), "bot"); history.push({ role: "assistant", text: reply }); }
      else { scripted(); }
    }, scripted);
  }

  function send(text) {
    text = (text || "").trim(); if (!text) return;
    addMsg(esc(text), "user");
    history.push({ role: "user", text: text });
    respond(text);
  }

  function renderChips() {
    chipsWrap.innerHTML = "";
    CHIPS.forEach(function (c) {
      var chip = el("<button class='chat-chip' type='button'></button>"); chip.textContent = c;
      chip.addEventListener("click", function () { send(c); });
      chipsWrap.appendChild(chip);
    });
  }

  function open() {
    panel.classList.add("open"); fab.style.display = "none";
    if (!started) { started = true; renderChips(); botSay("Hi! 👋 I'm the Michigan Shippers helper. Ask me about what we print, turnaround, file types, foil lids, or getting a quote. What can I help with?"); }
    setTimeout(function () { input.focus(); }, 120);
  }
  function close() { panel.classList.remove("open"); fab.style.display = "inline-flex"; }

  fab.addEventListener("click", open);
  panel.querySelector(".chat-close").addEventListener("click", close);
  form.addEventListener("submit", function (e) { e.preventDefault(); send(input.value); input.value = ""; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("open")) close(); });
})();
