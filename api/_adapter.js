/* Shared Netlify -> Vercel function bridge.

   The two site functions are written as Netlify handlers:
     exports.handler = async (event) => ({ statusCode, headers, body })
   Vercel hands us (req, res) instead. Rather than maintain two copies of each
   function, this converts between the shapes so the Netlify bodies run as-is.

   The one real trap: Vercel PARSES a JSON request body for you, while the
   Netlify handlers expect event.body to still be a STRING and call JSON.parse
   on it themselves. Handing them an object makes JSON.parse throw and every
   request comes back "bad_json". So re-stringify anything already parsed.
*/

function toEvent(req) {
  let body = req.body;
  if (body === undefined || body === null) body = "";
  else if (typeof body !== "string") body = JSON.stringify(body); // undo Vercel's parse
  else if (Buffer.isBuffer(body)) body = body.toString("utf8");

  return {
    httpMethod: req.method,
    headers: req.headers || {},
    body,
    // Client IP on Vercel is the FIRST entry of x-forwarded-for. Vercel sits
    // behind a proxy, so socket.remoteAddress is our own edge and would put
    // every visitor in one bucket if anything downstream rate-limits by IP.
    ip: String(req.headers?.["x-forwarded-for"] || "").split(",")[0].trim()
      || req.socket?.remoteAddress
      || "unknown",
  };
}

function send(res, out) {
  const o = out || { statusCode: 500, body: JSON.stringify({ error: "no_response" }) };
  for (const [k, v] of Object.entries(o.headers || {})) res.setHeader(k, v);
  res.status(o.statusCode || 200).send(o.body);
}

module.exports = { toEvent, send };
