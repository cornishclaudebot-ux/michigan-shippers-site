/* Michigan Shippers Supply — Shopify backend proxy (Netlify Function).
   One endpoint (/api/shop) for everything the storefront needs from Shopify:
     - catalog: live prices + availability for every product on store.html
     - checkout: builds a real Shopify cart and returns its secure checkoutUrl
     - signup / signin / signout / recover: classic Shopify customer accounts
     - orders: the signed-in customer's real orders + carrier tracking
   Secrets live in Netlify env vars, never in the browser:
     SHOPIFY_STOREFRONT_TOKEN  (required to go live — Storefront API access token
                                from the "Website Product Sync" custom app once
                                its Storefront API scopes are enabled)
     SHOPIFY_STORE_DOMAIN      (optional, defaults to the current store)
     SHOPIFY_API_VERSION       (optional escape hatch if this version is retired)
   Until the token is set, every op answers { configured:false } and the website
   silently keeps today's behavior (mock catalog, cart-permalink checkout, demo
   account preview) — so shipping this cannot break the live site. */

const DOMAIN = (process.env.SHOPIFY_STORE_DOMAIN || "qdgm9s-ga.myshopify.com").trim();
const TOKEN = (process.env.SHOPIFY_STOREFRONT_TOKEN || "").trim();
const API_VERSION = (process.env.SHOPIFY_API_VERSION || "2025-07").trim();

function resp(code, obj) {
  return { statusCode: code, headers: { "Content-Type": "application/json" }, body: JSON.stringify(obj) };
}

async function gql(query, variables) {
  const r = await fetch(`https://${DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": TOKEN,
    },
    body: JSON.stringify({ query, variables: variables || {} }),
  });
  if (!r.ok) throw new Error("shopify_http_" + r.status);
  const d = await r.json();
  if (d.errors && d.errors.length) throw new Error(d.errors[0].message || "shopify_graphql_error");
  return d.data;
}

function money(m) {
  if (!m || m.amount == null) return null;
  const n = Number(m.amount);
  const s = "$" + n.toFixed(2).replace(/\.00$/, "");
  return m.currencyCode && m.currencyCode !== "USD" ? s + " " + m.currencyCode : s;
}

/* Shopify's wrong-credentials message is "Unidentified customer" — translate it. */
function friendly(errs) {
  const msg = (errs && errs[0] && errs[0].message) || "";
  if (/unidentified customer/i.test(msg)) return "Incorrect email or password.";
  return msg || "Something went wrong. Please try again.";
}

const str = (v, max) => (typeof v === "string" ? v.trim().slice(0, max || 200) : "");

/* ---------------- ops ---------------- */

async function opCatalog() {
  // Variants keyed by their numeric id; the site maps them back to its product
  // ids through window.MSS_SHOP.variants (shopify.js), so this stays generic.
  const q = `query {
    products(first: 100) {
      edges { node {
        title
        variants(first: 20) { edges { node {
          id
          availableForSale
          price { amount currencyCode }
        } } }
      } }
    }
  }`;
  const d = await gql(q);
  const variants = {};
  for (const pe of d.products.edges) {
    for (const ve of pe.node.variants.edges) {
      const v = ve.node;
      const num = String(v.id).split("/").pop();
      variants[num] = {
        price: v.price && v.price.amount != null ? Number(v.price.amount) : null,
        available: !!v.availableForSale,
      };
    }
  }
  return { configured: true, variants };
}

async function opCheckout(body) {
  const raw = Array.isArray(body.lines) ? body.lines.slice(0, 60) : [];
  const lines = raw
    .filter((l) => l && /^\d+$/.test(String(l.variantId)) && Number(l.quantity) > 0)
    .map((l) => ({
      merchandiseId: "gid://shopify/ProductVariant/" + String(l.variantId),
      quantity: Math.min(Math.floor(Number(l.quantity)), 999),
    }));
  if (!lines.length) return { configured: true, error: "Your cart is empty." };
  const q = `mutation($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { checkoutUrl }
      userErrors { message }
    }
  }`;
  const d = await gql(q, { lines });
  const c = d.cartCreate;
  if (c.cart && c.cart.checkoutUrl) return { configured: true, checkoutUrl: c.cart.checkoutUrl };
  return { configured: true, error: friendly(c.userErrors) };
}

async function opSignin(body) {
  const email = str(body.email, 200), password = str(body.password, 200);
  if (!email || !password) return { configured: true, error: "Enter your email and password." };
  const q = `mutation($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken { accessToken expiresAt }
      customerUserErrors { message }
    }
  }`;
  const d = await gql(q, { input: { email, password } });
  const r = d.customerAccessTokenCreate;
  if (r.customerAccessToken) {
    return { configured: true, token: r.customerAccessToken.accessToken, expiresAt: r.customerAccessToken.expiresAt };
  }
  return { configured: true, error: friendly(r.customerUserErrors) };
}

async function opSignup(body) {
  const email = str(body.email, 200), password = str(body.password, 200);
  if (!email || !password) return { configured: true, error: "Enter your email and a password." };
  const input = { email, password };
  const firstName = str(body.firstName, 100), lastName = str(body.lastName, 100);
  if (firstName) input.firstName = firstName;
  if (lastName) input.lastName = lastName;
  const q = `mutation($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer { id }
      customerUserErrors { message }
    }
  }`;
  const d = await gql(q, { input });
  const r = d.customerCreate;
  if (!r.customer) return { configured: true, error: friendly(r.customerUserErrors) };
  // account created — sign them straight in
  return opSignin(body);
}

async function opSignout(body) {
  const token = str(body.token, 400);
  if (token) {
    const q = `mutation($t: String!) { customerAccessTokenDelete(customerAccessToken: $t) { deletedAccessToken } }`;
    try { await gql(q, { t: token }); } catch (e) { /* best effort — client clears its copy regardless */ }
  }
  return { configured: true, ok: true };
}

async function opRecover(body) {
  const email = str(body.email, 200);
  if (!email) return { configured: true, error: "Enter your email first." };
  const q = `mutation($email: String!) { customerRecover(email: $email) { customerUserErrors { message } } }`;
  const d = await gql(q, { email });
  const errs = d.customerRecover && d.customerRecover.customerUserErrors;
  // Shopify throttles repeat requests; treat "already sent" style errors as success
  if (errs && errs.length && !/reset/i.test(errs[0].message || "")) {
    return { configured: true, error: friendly(errs) };
  }
  return { configured: true, ok: true };
}

async function opOrders(body) {
  const token = str(body.token, 400);
  if (!token) return { configured: true, error: "signed_out" };
  const q = `query($t: String!) {
    customer(customerAccessToken: $t) {
      firstName lastName email
      orders(first: 20, sortKey: PROCESSED_AT, reverse: true) {
        edges { node {
          name processedAt financialStatus fulfillmentStatus statusUrl
          totalPrice { amount currencyCode }
          lineItems(first: 20) { edges { node { title quantity } } }
          successfulFulfillments(first: 5) {
            trackingCompany
            trackingInfo(first: 5) { number url }
          }
        } }
      }
    }
  }`;
  const d = await gql(q, { t: token });
  if (!d.customer) return { configured: true, error: "signed_out" }; // token expired/invalid
  const c = d.customer;
  return {
    configured: true,
    customer: {
      firstName: c.firstName || "",
      lastName: c.lastName || "",
      email: c.email || "",
      orders: c.orders.edges.map(({ node: o }) => ({
        name: o.name,
        processedAt: o.processedAt,
        financialStatus: o.financialStatus,
        fulfillmentStatus: o.fulfillmentStatus,
        statusUrl: o.statusUrl || null,
        total: money(o.totalPrice),
        items: o.lineItems.edges.map(({ node: li }) => ({ title: li.title, quantity: li.quantity })),
        fulfillments: (o.successfulFulfillments || []).map((f) => ({
          company: f.trackingCompany || null,
          tracking: (f.trackingInfo || []).map((t) => ({ number: t.number, url: t.url || null })),
        })),
      })),
    },
  };
}

const OPS = {
  status: async () => ({ configured: true }),
  catalog: opCatalog,
  checkout: opCheckout,
  signin: opSignin,
  signup: opSignup,
  signout: opSignout,
  recover: opRecover,
  orders: opOrders,
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return resp(405, { error: "method_not_allowed" });

  let body;
  try { body = JSON.parse(event.body || "{}"); } catch (e) { return resp(400, { error: "bad_json" }); }

  const op = OPS[body.op];
  if (!op) return resp(400, { error: "unknown_op" });

  // Not configured yet → the site quietly stays in demo/permalink mode.
  if (!TOKEN) return resp(200, { configured: false });

  try {
    return resp(200, await op(body));
  } catch (e) {
    // Never leak internals; the client treats any error as "fall back gracefully".
    console.error("shop op=" + body.op + " failed:", e && e.message);
    return resp(200, { configured: true, error: "The store service hiccuped. Please try again in a minute." });
  }
};
