/* ============================================================
   BUILD LABEL PAGES
   ------------------------------------------------------------
   Stamps one real static HTML file per label category out of
   labels-data.js, so every category gets its own indexable URL
   (labels-<id>.html) while the data stays in ONE place.

   Why static files and not one page + a query string: a query
   string page indexes as a single document, and "custom shipping
   labels michigan" is exactly the kind of search this business
   should win. Why not eight hand-maintained files: they drift.
   This gets both.

   The nav and footer are READ OUT OF labels.html at build time
   rather than duplicated here, so shared chrome can never fall
   out of sync with the rest of the site.

   Run after any edit to labels-data.js:
     node build-label-pages.js
   ============================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const V = '?v=20260803';

/* ---- load the data (it assigns to window.MSS_LABELS) ---- */
const dataSrc = fs.readFileSync(path.join(ROOT, 'labels-data.js'), 'utf8');
const sandbox = { window: {} };
new Function('window', dataSrc)(sandbox.window);
const CATS = sandbox.window.MSS_LABELS;
if (!Array.isArray(CATS) || !CATS.length) throw new Error('labels-data.js produced no categories');

/* ---- borrow the shared chrome from labels.html ---- */
const shell = fs.readFileSync(path.join(ROOT, 'labels.html'), 'utf8');
function block(open, close) {
  const a = shell.indexOf(open);
  const b = shell.indexOf(close, a);
  if (a < 0 || b < 0) throw new Error('could not find ' + open + ' in labels.html');
  return shell.slice(a, b + close.length);
}

/* A DIV block needs a BALANCED extractor, not "find the next </div>". Naively
   taking the first </div> after <div id="pre"> stops inside the preloader and
   returns an UNCLOSED div, which silently nests the entire rest of the page
   inside the preloader. immersive.js then removes #pre on repeat visits and
   takes the whole page with it. That bug shipped once here; do not reintroduce it. */
function divBlock(openTag) {
  const a = shell.indexOf(openTag);
  if (a < 0) throw new Error('could not find ' + openTag + ' in labels.html');
  const re = /<div\b[^>]*>|<\/div>/g;
  re.lastIndex = a;
  let depth = 0, m;
  while ((m = re.exec(shell))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return shell.slice(a, m.index + m[0].length);
  }
  throw new Error('unbalanced divs after ' + openTag);
}

const HEADER = block('<header class="nav"', '</header>');
const FOOTER = block('<footer>', '</footer>');
const PRELOADER = divBlock('<div id="pre">');
[['header', HEADER, '</header>'], ['footer', FOOTER, '</footer>']].forEach(([n, b, c]) => {
  if (!b.trim().endsWith(c)) throw new Error(n + ' block did not close cleanly');
});
{
  const opens = (PRELOADER.match(/<div\b/g) || []).length;
  const closes = (PRELOADER.match(/<\/div>/g) || []).length;
  if (opens !== closes) throw new Error(`preloader divs unbalanced: ${opens} open, ${closes} close`);
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const ICON_ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

function rows(c) {
  return c.variants.map(v => {
    const isLid = c.id === 'foil-lids';
    const flag = v.grounding === 'grounded'
      ? '<span class="lt-flag g" title="Backed by work already shown on this site">We print this</span>'
      : '<span class="lt-flag s" title="A standard starting spec, change anything before we quote">Starting spec</span>';
    const min = isLid ? '<span class="lt-min" title="Foil lids are our only product with a minimum">5,000 min</span>' : '';
    const key = [c.id, v.label, v.size, v.material].join('|');
    return `        <tr>
          <td class="c-name">${esc(v.label)}${flag}${min}<div class="c-use">${esc(v.typical_use)}</div></td>
          <td class="c-size" data-l="Size">${esc(v.size)}</td>
          <td data-l="Format">${esc(v.format)}</td>
          <td data-l="Material">${esc(v.material)}</td>
          <td data-l="Adhesive">${esc(v.adhesive)}</td>
          <td class="c-act"><button class="qadd" type="button" data-add data-key="${esc(key)}"
            data-cat="${esc(c.id)}" data-catname="${esc(c.name)}" data-label="${esc(v.label)}"
            data-size="${esc(v.size)}" data-format="${esc(v.format)}"
            data-material="${esc(v.material)}" data-adhesive="${esc(v.adhesive)}">Add to quote list</button></td>
        </tr>`;
  }).join('\n');
}

function page(c, i) {
  const prev = CATS[(i - 1 + CATS.length) % CATS.length];
  const next = CATS[(i + 1) % CATS.length];
  const url = `https://michiganshippers.com/labels-${c.id}.html`;
  const desc = `${c.seo} from Michigan Shippers Supply, Spring Lake Michigan. ${c.variants.length} common starting specs in paper, film, and foil. Printed to order, most jobs ship in 10 days or less.`;
  const lidNote = c.id === 'foil-lids'
    ? '<b>Foil lids are the one product with a minimum, at 5,000 lids.</b> Everything else on this site has no minimum. '
    : '<b>There is no minimum on these.</b> ';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(c.seo)} | Michigan Shippers Supply</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Michigan Shippers Supply" />
<meta property="og:title" content="${esc(c.seo)} | Michigan Shippers Supply" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="https://michiganshippers.com/images/social-share.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="628" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://michiganshippers.com/images/social-share.jpg" />
<link rel="icon" type="image/png" sizes="128x128" href="images/favicon-128.png" />
<link rel="apple-touch-icon" href="images/favicon-128.png" />
<script>document.documentElement.className='js';</script>
<link rel="stylesheet" href="immersive.css${V}" />
<link rel="stylesheet" href="labels-browse.css${V}" />
<script type="speculationrules">
{"prerender":[{"where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":"/*\\\\?*"}}]},"eagerness":"moderate"}]}
</script>
  <script defer src="https://site-stats-dartyforlife.vercel.app/script.js" data-website-id="b9dceac7-76d3-4a54-8c4f-c17c00554771"></script>
</head>
<body>

${PRELOADER}
<div class="world" aria-hidden="true"></div>

${HEADER}

<main>
  <nav class="crumbs" aria-label="Breadcrumb">
    <a href="index.html">Home</a><span>&gt;</span><a href="labels.html">Our Labels</a><span>&gt;</span>${esc(c.name)}
  </nav>

  <section class="lt-hero">
    <div>
      <h1>${esc(c.name)}</h1>
      <p class="lt-lead">${esc(c.intro)}</p>
      <ul class="lt-caps">
        <li>${ICON_CHECK} Free samples at no cost</li>
        <li>${ICON_CHECK} A proof before anything prints</li>
        <li>${ICON_CHECK} Most jobs ship in 10 days or less</li>
      </ul>
    </div>
    <div class="lt-shot"><img src="${c.art}${V}" alt="${esc(c.name)} label stock" loading="eager" decoding="async" width="1000" height="640" /></div>
  </section>

  <div class="lt-note"><div>
    ${lidNote}Every label here is printed to order, so these are the specs people start from, not items sitting on a shelf.
    Pick the closest one, add it to your quote list, and tell us what to change. If you do not see your size, we can almost certainly make it.
  </div></div>

  <section class="lt-chart">
    <h2>Common specs</h2>
    <p class="lt-sub">${c.variants.length} starting points for ${esc(c.name.toLowerCase())}. Add as many as you want to one quote.</p>
    <table class="lt-table">
      <thead><tr>
        <th>Label</th><th>Size</th><th>Format</th><th>Material</th><th>Adhesive</th><th></th>
      </tr></thead>
      <tbody>
${rows(c)}
      </tbody>
    </table>
  </section>

  <section class="lt-chart" aria-label="What people use these for">
    <h2>What people use these for</h2>
    <ul class="lt-caps" style="margin-top:10px">
      ${c.use_cases.map(u => `<li>${esc(u)}</li>`).join('\n      ')}
    </ul>
  </section>

  <div class="lt-any"><div>
    <h3>Do not see exactly what you need?</h3>
    <p>We print custom, so the list above is a starting point and not a limit. Tell us the size, the container, and where the label has to survive, and our in-house design team will work it out with you.</p>
    <a class="btn btn-primary" href="index.html#contact">Request a quote</a>
  </div></div>

  <nav class="lt-any" aria-label="More label categories"><div style="border-style:solid">
    <h3>More label types</h3>
    <p style="margin-bottom:12px"><a href="labels-${prev.id}.html" style="color:#7bb6e6">${esc(prev.name)}</a>
      &nbsp;&middot;&nbsp; <a href="labels-${next.id}.html" style="color:#7bb6e6">${esc(next.name)}</a>
      &nbsp;&middot;&nbsp; <a href="labels.html" style="color:#7bb6e6">See all label types</a></p>
  </div></nav>
</main>

${FOOTER}

<script defer src="immersive.js${V}"></script>
<script defer src="quote-list.js${V}"></script>
<script defer src="chat.js${V}"></script>
</body>
</html>
`;
}

let n = 0;
CATS.forEach((c, i) => {
  const f = path.join(ROOT, `labels-${c.id}.html`);
  fs.writeFileSync(f, page(c, i));
  n++;
  console.log(`  wrote labels-${c.id}.html  (${c.variants.length} rows)`);
});
console.log(`${n} category pages generated from labels-data.js`);
