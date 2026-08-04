/* Vercel adapter for the Shopify storefront proxy.

   Same arrangement as api/chat.js: netlify/functions/shop.js holds the real
   logic (catalog, checkout, signin, signup, signout, recover, orders) and this
   only bridges the calling convention. Keeping one body matters more here than
   anywhere else on the site, because this path carries live pricing, checkout,
   and customer accounts for a real business.

   Endpoint: /api/shop  (same path store.js already calls, so no client change)
*/
const { handler } = require("../netlify/functions/shop.js");
const { toEvent, send } = require("./_adapter.js");

module.exports = async (req, res) => send(res, await handler(toEvent(req)));
