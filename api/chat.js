/* Vercel adapter for the AI help chat.

   Netlify deploys on this account are credit-blocked, so michiganshippers.com
   froze on an old build. This runs the SAME function body on Vercel instead of
   forking it: netlify/functions/chat.js stays the single source of truth, and
   this file only translates Vercel's (req, res) into the Netlify event shape.
   If Netlify ever comes back, both hosts keep working with no drift.

   Endpoint: /api/chat  (same path the site already calls, so no client change)
*/
const { handler } = require("../netlify/functions/chat.js");
const { toEvent, send } = require("./_adapter.js");

module.exports = async (req, res) => send(res, await handler(toEvent(req)));
