/* ============================================================
   STORE engine — Michigan Shippers Supply specialty shop
   ------------------------------------------------------------
   MOCK DATA for now. When Shopify goes live, the only thing that
   changes is the CATALOG source: swap the array below for products
   pulled from the Shopify Storefront API (same shape: id/name/sub/
   tag/price/unit/img), point checkout at Shopify's hosted checkout,
   and point sign-in at Shopify customer accounts (which feed the
   dashboard's real orders + carrier tracking). The cart UI, the
   dashboard markup, and rendering all stay exactly as-is.
   ============================================================ */
(function(){
  "use strict";

  /* ---------------- CATALOG (mock — replace w/ Shopify later) ------------- */
  var CATALOG = [
    { id:'printers', name:'Printers & Printheads',
      blurb:'Industrial and desktop thermal printers, spare units, and replacement printheads.',
      items:[
        {id:'zebra-zd621', img:'images/products/zebra-zd621.png?v=1',   name:'Zebra ZD621 Desktop Printer',        sub:'203 dpi · USB / Ethernet / Bluetooth', tag:'Desktop',    price:649,  unit:'each'},
        {id:'zebra-zt411', img:'images/products/zebra-zt411.png?v=1',   name:'Zebra ZT411 Industrial Printer',     sub:'4" wide · high-volume production',     tag:'Industrial', price:1899, unit:'each'},
        {id:'datamax-iclass', img:'images/products/datamax-iclass.png?v=1',name:"Datamax-O'Neil I-Class Mark II",     sub:'Rugged all-metal industrial unit',     tag:'Industrial', price:1499, unit:'each'},
        {id:'honeywell-pm45', img:'images/products/honeywell-pm45.png?v=1',name:'Honeywell PM45 Industrial Printer',  sub:'Color touch display · fast throughput',tag:'Industrial', price:1750, unit:'each'},
        {id:'zebra-gk420d', img:'images/products/zebra-gk420d.png?v=1',  name:'Zebra GK420d (Refurbished)',         sub:'Direct thermal · budget-friendly spare',tag:'Spare',     price:299,  unit:'each'},
        {id:'printhead-203', img:'images/products/printhead-203.png?v=1', name:'Replacement Printhead, 203 dpi',     sub:'Zebra-compatible · easy swap',          tag:'Parts',     price:189,  unit:'each'}
      ]},
    { id:'ribbons', name:'Thermal-Transfer Ribbons',
      blurb:'Wax, wax-resin, resin, and specialty colors, matched to your stock and print head.',
      items:[
        {id:'tt-wax-433', img:'images/products/tt-wax-433.png?v=1',     name:'Wax Ribbon, 4.33" × 1476\'',        sub:'General-purpose, black',            tag:'Wax',       price:12.50, unit:'per roll'},
        {id:'tt-waxresin-433', img:'images/products/tt-waxresin-433.png?v=1',name:'Wax-Resin Ribbon, 4.33" × 1476\'',  sub:'Durable, smudge-resistant',         tag:'Wax-Resin', price:18.00, unit:'per roll'},
        {id:'tt-resin-433', img:'images/products/tt-resin-433.png?v=1',   name:'Resin Ribbon, 4.33" × 1476\'',      sub:'Chemical & heat resistant',         tag:'Resin',     price:24.00, unit:'per roll'},
        {id:'tt-wax-236', img:'images/products/tt-wax-236.png?v=1',     name:'Wax Ribbon, 2.36" × 1476\'',        sub:'Narrow-web, black',                 tag:'Wax',       price:9.75,  unit:'per roll'},
        {id:'tt-color', img:'images/products/tt-color.png?v=1',       name:'Resin Ribbon, Specialty Color',     sub:'Red · Blue · Green · White',        tag:'Color',     price:28.00, unit:'per roll'},
        {id:'tt-nearedge', img:'images/products/tt-nearedge.png?v=1',    name:'Near-Edge Resin Ribbon',            sub:'For high-speed near-edge heads',     tag:'Resin',     price:32.00, unit:'per roll'}
      ]},
    { id:'markers', name:'Paint Markers & Coding',
      blurb:'Industrial paint markers, coding fluids, and inkjet cartridges.',
      items:[
        {id:'pm-white', img:'images/products/pm-white.png?v=1',    name:'Industrial Paint Marker, White',     sub:'Fast-dry, weatherproof',           tag:'Marker', price:4.50,  unit:'each'},
        {id:'pm-yellow', img:'images/products/pm-yellow.png?v=1',   name:'Valve-Action Paint Marker, Yellow',  sub:'Low-corrosion, high-visibility',   tag:'Marker', price:5.25,  unit:'each'},
        {id:'pm-12pack', img:'images/products/pm-12pack.png?v=1',   name:'Paint Markers, Assorted (12-pack)',  sub:'Mixed colors, bulk value',         tag:'Marker', price:42.00, unit:'per pack'},
        {id:'cd-makeup', img:'images/products/cd-makeup.png?v=1',   name:'Coding Make-Up Fluid',               sub:'Videojet-compatible',              tag:'Coding', price:48.00, unit:'per bottle'},
        {id:'cd-cartridge', img:'images/products/cd-cartridge.png?v=1',name:'Inkjet Coding Cartridge',            sub:'Date / lot / batch coding',        tag:'Coding', price:36.00, unit:'each'}
      ]},
    { id:'applicators', name:'Rollers & Applicators',
      blurb:'Hand-held to tabletop label applicators, rollers, and tools.',
      items:[
        {id:'app-hand', img:'images/products/app-hand.png?v=1',    name:'Hand-Held Label Applicator',        sub:'Trigger-fed, ergonomic grip',     tag:'Applicator', price:129, unit:'each'},
        {id:'app-table', img:'images/products/app-table.png?v=1',   name:'Tabletop Roller Applicator',        sub:'Semi-automatic, repeatable',      tag:'Applicator', price:349, unit:'each'},
        {id:'app-roller', img:'images/products/app-roller.png?v=1',  name:'Replacement Rubber Roller',         sub:'Fits most applicators',           tag:'Parts',      price:39,  unit:'each'},
        {id:'app-bottle', img:'images/products/app-bottle.png?v=1',  name:'Round-Product / Bottle Applicator', sub:'Wrap labels onto cylinders',      tag:'Applicator', price:899, unit:'each'},
        {id:'app-squeegee', img:'images/products/app-squeegee.png?v=1',name:'Felt-Edge Squeegee',                sub:'Bubble-free hand application',    tag:'Tool',       price:7.50,unit:'each'}
      ]},
    { id:'coatings', name:'UV Varnish & Coatings',
      blurb:'Gloss and matte UV varnish, overlaminates, and spot-UV finishing.',
      items:[
        {id:'uv-gloss', img:'images/products/uv-gloss.png?v=1',name:'UV Gloss Varnish, 1 gal',  sub:'High-shine protective finish',  tag:'Varnish',  price:89,  unit:'per gallon'},
        {id:'uv-matte', img:'images/products/uv-matte.png?v=1',name:'UV Matte Varnish, 1 gal',  sub:'Soft-touch, glare-free',        tag:'Varnish',  price:94,  unit:'per gallon'},
        {id:'lam-film', img:'images/products/lam-film.png?v=1',name:'Overlaminate Film, Roll',  sub:'Scuff & moisture protection',   tag:'Laminate', price:65,  unit:'per roll'},
        {id:'spot-uv', img:'images/products/spot-uv.png?v=1', name:'Spot-UV Coating Kit',      sub:'Selective high-gloss accents',  tag:'Coating',  price:120, unit:'per kit'}
      ]},
    { id:'barcodes', name:'Barcodes & Scanning',
      blurb:'GS1 barcode setup, verification, and handheld scanners.',
      items:[
        {id:'bc-gs1', img:'images/products/bc-gs1.png?v=1',     name:'GS1 Barcode Setup (UPC / EAN)',   sub:'Retail-ready, registered',     tag:'Service', price:60,  unit:'one-time'},
        {id:'bc-verify', img:'images/products/bc-verify.png?v=1',  name:'Barcode Verification, per design',sub:'ISO grade report',            tag:'Service', price:45,  unit:'per design'},
        {id:'bc-usb', img:'images/products/bc-usb.png?v=1',     name:'Handheld Barcode Scanner, USB',   sub:'1D / 2D, plug-and-play',       tag:'Scanner', price:129, unit:'each'},
        {id:'bc-wireless', img:'images/products/bc-wireless.png?v=1',name:'Wireless 2D Barcode Scanner',     sub:'Bluetooth, long-range',        tag:'Scanner', price:279, unit:'each'}
      ]},
    { id:'software', name:'Label Software',
      blurb:'Design and print software, plus setup and training.',
      items:[
        {id:'sw-bartender-start', img:'images/products/sw-bartender-start.png?v=1',name:'BarTender Starter',            sub:'Design + print essentials',   tag:'Software', price:327, unit:'per license'},
        {id:'sw-bartender-pro', img:'images/products/sw-bartender-pro.png?v=1',  name:'BarTender Professional',       sub:'Databases + automation',      tag:'Software', price:695, unit:'per license'},
        {id:'sw-nicelabel', img:'images/products/sw-nicelabel.png?v=1',      name:'NiceLabel Designer Pro',       sub:'Dynamic, data-driven labels', tag:'Software', price:599, unit:'per license'},
        {id:'sw-training', img:'images/products/sw-training.png?v=1',       name:'Design Setup & Training, 1 hr',sub:'Remote, one-on-one',          tag:'Service',  price:95,  unit:'per hour'}
      ]},
    { id:'custom', name:'Custom Orders & Services',
      blurb:'Custom labels, tooling, rush production, and managed inventory.',
      items:[
        {id:'cu-quote', img:'images/products/cu-quote.png?v=1',  name:'Custom Label Quote',               sub:'Any size, stock, or finish',     tag:'Service', price:0},
        {id:'cu-managed', img:'images/products/cu-managed.png?v=1',name:'Managed Inventory Consultation',   sub:'Just-in-time printing program',  tag:'Service', price:0},
        {id:'cu-die', img:'images/products/cu-die.png?v=1',    name:'Custom Die / Tooling',             sub:'New label shapes & sizes',       tag:'Service', price:250, from:true},
        {id:'cu-rush', img:'images/products/cu-rush.png?v=1',   name:'Rush Production',                  sub:'Priority queue, per order',      tag:'Service', price:75,  unit:'per order'}
      ]}
  ];

  /* ---------------- clean line icons per category (no emojis) ------------- */
  var I0='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  var ICONS = {
    printers:    I0+'<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
    ribbons:     I0+'<rect x="2" y="2" width="20" height="20" rx="2.5"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>',
    markers:     I0+'<path d="M17 3a2.83 2.83 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
    applicators: I0+'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    coatings:    I0+'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
    barcodes:    I0+'<line x1="4" y1="6" x2="4" y2="18"/><line x1="8" y1="6" x2="8" y2="18"/><line x1="12" y1="6" x2="12" y2="18"/><line x1="16" y1="6" x2="16" y2="18"/><line x1="20" y1="6" x2="20" y2="18"/></svg>',
    software:    I0+'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    custom:      I0+'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
  };
  function icon(cat){ return ICONS[cat] || ''; }

  /* ---------------- helpers ---------------- */
  var byId = {};
  CATALOG.forEach(function(c){ c.items.forEach(function(it){ it.cat=c.id; byId[it.id]=it; }); });

  /* expose to the deck fly-through (deck.js) */
  window.MSS = { catalog: CATALOG, icon: icon };

  function money(n){ return '$' + Number(n).toFixed(2).replace(/\.00$/,''); }

  function getCart(){ try{ return JSON.parse(localStorage.getItem('mss_cart')||'{}'); }catch(e){ return {}; } }
  function setCart(c){ localStorage.setItem('mss_cart', JSON.stringify(c)); updateBadges(); }
  function cartCount(){ var c=getCart(),n=0; for(var k in c) n+=c[k]; return n; }
  function cartTotal(){ var c=getCart(),t=0; for(var k in c){ if(byId[k]) t+=byId[k].price*c[k]; } return t; }
  function updateBadges(){
    var n=cartCount();
    Array.prototype.forEach.call(document.querySelectorAll('.cart-badge'),function(b){
      b.textContent=n; b.classList.toggle('show', n>0);
    });
  }

  /* ---------------- live Shopify backend (/api/shop, Netlify function) ----
     LIVE.configured flips true only when the backend answers with a working
     catalog. Until then (no token yet, GitHub Pages fallback host, local
     preview, Shopify outage) everything below no-ops and the site behaves
     exactly as the original demo: mock prices, cart-permalink checkout,
     preview account. Zero-risk, same pattern as the AI chat. ------------- */
  var LIVE = { configured:false };
  function api(payload){
    return fetch('/api/shop',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
      .then(function(r){ return r.json(); });
  }
  function getAuth(){ try{ return JSON.parse(localStorage.getItem('mss_auth')||'null'); }catch(e){ return null; } }
  function setAuth(a){ if(a) localStorage.setItem('mss_auth', JSON.stringify(a)); else localStorage.removeItem('mss_auth'); }
  function esc(s){
    return String(s==null?'':s).replace(/[&<>"']/g,function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  /* overlay real Shopify prices + stock onto the rendered catalog, so what the
     customer sees always matches what Shopify charges at checkout */
  function applyLiveCatalog(variants){
    var map = (window.MSS_SHOP && window.MSS_SHOP.variants) || {};
    for(var siteId in map){
      var lv = variants[String(map[siteId])], it = byId[siteId];
      if(!lv || !it) continue;
      if(typeof lv.price==='number' && !isNaN(lv.price) && lv.price>0 && it.price>0) it.price = lv.price;
      it.soldOut = (lv.available===false);
    }
    Array.prototype.forEach.call(document.querySelectorAll('[data-add]'),function(b){
      var it = byId[b.getAttribute('data-add')]; if(!it) return;
      var card = b.closest('.prod-card'); if(!card) return;
      var priceEl = card.querySelector('.price');
      if(priceEl && it.price>0){
        priceEl.innerHTML = (it.from?'<small>from</small>':'') + money(it.price) + (it.unit?'<small>'+it.unit+'</small>':'');
      }
      if(it.soldOut){ b.disabled=true; b.textContent='Sold out'; }
    });
    renderCart();
  }

  /* ---------------- render the shop ---------------- */
  var shop = document.getElementById('shop');
  if(shop){
    var secHtml = '';
    CATALOG.forEach(function(c){
      var cards = c.items.map(function(it){
        var isQuote = it.price===0;
        var price = isQuote
          ? '<div class="price">Quote<small>tell us your specs</small></div>'
          : '<div class="price">'+(it.from?'<small>from</small>':'')+money(it.price)+(it.unit?'<small>'+it.unit+'</small>':'')+'</div>';
        var btn = isQuote
          ? '<a class="add quote" href="about.html#contact">Request</a>'
          : '<button class="add" type="button" data-add="'+it.id+'">Add</button>';
        var art = (window.MSS_ART && window.MSS_ART[it.id]) || '';
        var visual = it.img ? '<img src="'+it.img+'" alt="'+it.name+'">' : (art ? '<div class="pic-art">'+art+'</div>' : icon(c.id));
        var pic = '<div class="pic">'+ visual +'<span class="tag">'+it.tag+'</span></div>';
        return '<article class="prod-card c-'+c.id+'">'+pic+
          '<div class="body"><div class="nm">'+it.name+'</div><div class="sub">'+it.sub+'</div>'+
          '<div class="row">'+price+btn+'</div></div></article>';
      }).join('');
      secHtml += '<section class="shop-cat reveal" id="cat-'+c.id+'">'+
        '<div class="cat-head"><span class="cat-ic">'+icon(c.id)+'</span><div><h2>'+c.name+'</h2><p>'+c.blurb+'</p></div></div>'+
        '<div class="prod-grid">'+cards+'</div></section>';
    });
    shop.innerHTML = secHtml;

    /* reveal the dynamically-built sections (immersive.js's observer already ran) */
    if('IntersectionObserver' in window){
      var sio=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); sio.unobserve(e.target); } });
      },{threshold:.06, rootMargin:'0px 0px -4% 0px'});
      Array.prototype.forEach.call(shop.querySelectorAll('.reveal'),function(el){ sio.observe(el); });
    } else {
      Array.prototype.forEach.call(shop.querySelectorAll('.reveal'),function(el){ el.classList.add('in'); });
    }

    /* add-to-cart */
    shop.addEventListener('click',function(e){
      var b=e.target.closest('[data-add]'); if(!b) return;
      var id=b.getAttribute('data-add'); var c=getCart(); c[id]=(c[id]||0)+1; setCart(c);
      b.textContent='Added ✓'; b.classList.add('added');
      setTimeout(function(){ b.textContent='Add'; b.classList.remove('added'); },1000);
      openCart();
    });
  }

  /* ---------------- cart drawer ---------------- */
  var drawer=document.getElementById('cartDrawer');
  function renderCart(){
    var body=document.getElementById('cartBody'), foot=document.getElementById('cartFoot'); if(!body) return;
    var c=getCart(), ids=Object.keys(c).filter(function(k){ return c[k]>0 && byId[k]; });
    if(!ids.length){
      body.innerHTML='<div class="cart-empty">Your cart is empty.<br>Browse the supplies and add what you need.</div>';
      if(foot) foot.style.display='none'; return;
    }
    if(foot) foot.style.display='block';
    body.innerHTML=ids.map(function(id){
      var it=byId[id];
      var ci = it.img ? '<span class="ci"><img src="'+it.img+'" alt=""></span>' : '<span class="ci">'+icon(it.cat)+'</span>';
      return '<div class="cart-line">'+ci+
        '<div class="info"><div class="n">'+it.name+'</div><div class="p">'+money(it.price)+' each</div>'+
        '<div class="qty"><button type="button" data-dec="'+id+'" aria-label="Decrease">–</button><span>'+c[id]+'</span>'+
        '<button type="button" data-inc="'+id+'" aria-label="Increase">+</button></div></div>'+
        '<button class="rm" type="button" data-rm="'+id+'">Remove</button></div>';
    }).join('');
    var sub=document.getElementById('cartSubtotal'); if(sub) sub.textContent=money(cartTotal());
  }
  function openCart(){
    var o=document.getElementById('cartOverlay'); if(!drawer||!o) return;
    renderCart(); o.classList.add('open'); drawer.classList.add('open'); document.body.style.overflow='hidden';
  }
  function closeCart(){
    var o=document.getElementById('cartOverlay'); if(!drawer||!o) return;
    o.classList.remove('open'); drawer.classList.remove('open'); document.body.style.overflow='';
  }
  if(drawer){
    var ov=document.getElementById('cartOverlay'); if(ov) ov.addEventListener('click',closeCart);
    var cc=document.getElementById('cartClose'); if(cc) cc.addEventListener('click',closeCart);
    drawer.addEventListener('click',function(e){
      var inc=e.target.closest('[data-inc]'), dec=e.target.closest('[data-dec]'), rm=e.target.closest('[data-rm]');
      if(!inc&&!dec&&!rm) return;
      var c=getCart(), id;
      if(inc){ id=inc.getAttribute('data-inc'); c[id]=(c[id]||0)+1; }
      else if(dec){ id=dec.getAttribute('data-dec'); c[id]=(c[id]||0)-1; if(c[id]<=0) delete c[id]; }
      else if(rm){ id=rm.getAttribute('data-rm'); delete c[id]; }
      setCart(c); renderCart();
    });
    var co=document.getElementById('checkoutBtn');
    if(co) co.addEventListener('click',function(){
      var cart=getCart(), shop=window.MSS_SHOP, parts=[], lines=[];
      if(shop&&shop.variants){ for(var k in cart){ if(cart[k]>0 && shop.variants[k]){ parts.push(shop.variants[k]+':'+cart[k]); lines.push({variantId:String(shop.variants[k]), quantity:cart[k]}); } } }
      if(!parts.length){ co.textContent='Your cart is empty'; setTimeout(function(){ co.textContent='Checkout'; },1600); return; }
      co.textContent='Taking you to secure checkout'; co.disabled=true;
      var permalink='https://'+shop.domain+'/cart/'+parts.join(',');
      function fallback(){ window.location.href=permalink; }
      if(LIVE.configured){
        /* real Shopify cart via the backend; on any hiccup the permalink still works */
        api({op:'checkout', lines:lines}).then(function(d){
          if(d && d.checkoutUrl) window.location.href=d.checkoutUrl; else fallback();
        }).catch(fallback);
      } else fallback();
    });
  }
  /* nav cart buttons (on store/account pages open the drawer) */
  Array.prototype.forEach.call(document.querySelectorAll('[data-cart-open]'),function(btn){
    btn.addEventListener('click',function(e){ if(drawer){ e.preventDefault(); openCart(); } });
  });

  updateBadges();

  /* ---------------- login / account dashboard ---------------- */
  var loginView = document.getElementById('loginView');
  var dashView  = document.getElementById('dashboardView');

  function showDash(){
    if(!loginView||!dashView) return;
    loginView.style.display='none'; dashView.style.display='block'; window.scrollTo(0,0);
  }
  function showLogin(){
    if(!loginView||!dashView) return;
    dashView.style.display='none'; loginView.style.display=''; window.scrollTo(0,0);
  }

  /* sign-in tabs (email vs create account) */
  Array.prototype.forEach.call(document.querySelectorAll('.auth-tab'),function(t){
    t.addEventListener('click',function(){
      Array.prototype.forEach.call(document.querySelectorAll('.auth-tab'),function(x){ x.classList.remove('active'); });
      t.classList.add('active');
      var mode=t.getAttribute('data-mode');
      Array.prototype.forEach.call(document.querySelectorAll('.signup-only'),function(el){ el.style.display = mode==='signup' ? 'block' : 'none'; });
      var sb=document.getElementById('authSubmit'); if(sb) sb.textContent = mode==='signup' ? 'Create account' : 'Sign in';
    });
  });

  /* ---------------- real accounts (Shopify customer accounts via /api/shop) */
  var authErr=document.getElementById('authError');
  function showAuthErr(msg){ if(authErr){ authErr.textContent=msg; authErr.style.display='block'; } }
  function hideAuthErr(){ if(authErr) authErr.style.display='none'; }

  var CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  function fmtDate(iso){
    var d=new Date(iso);
    return isNaN(d) ? '' : d.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});
  }

  /* build real order cards (replaces the mock preview once signed in) */
  function renderOrders(cust){
    var sub=document.getElementById('dashSub');
    if(sub) sub.textContent=(cust.firstName?'Welcome back, '+cust.firstName+'. ':'')+'Track every shipment and reorder your supplies in one click.';
    var banner=document.getElementById('dashBanner'); if(banner) banner.style.display='none';
    var list=document.getElementById('orderList'); if(!list) return;
    var orders=cust.orders||[];
    if(!orders.length){
      list.innerHTML='<div class="dash-banner">No orders yet. <a href="store.html">Browse the supply store</a> — your orders and live tracking will appear here.</div>';
      return;
    }
    list.innerHTML=orders.map(function(o){
      var shipped=(o.fulfillments||[]).length>0;
      var fs=String(o.fulfillmentStatus||'').toUpperCase();
      var chip= fs==='FULFILLED' ? '<span class="order-status transit">Shipped</span>'
              : shipped ? '<span class="order-status transit">Partially shipped</span>'
              : '<span class="order-status processing">Processing</span>';
      var items=(o.items||[]).map(function(li){ return esc(li.title)+(li.quantity>1?' (×'+li.quantity+')':''); }).join(' &middot; ');
      var meta=[];
      if(o.total) meta.push('<span>Total <b>'+esc(o.total)+'</b></span>');
      (o.fulfillments||[]).forEach(function(f){
        if(f.company) meta.push('<span>Carrier <b>'+esc(f.company)+'</b></span>');
        (f.tracking||[]).forEach(function(t){
          if(!t.number) return;
          meta.push('<span>Tracking <b>'+(t.url?'<a href="'+esc(t.url)+'" target="_blank" rel="noopener">'+esc(t.number)+'</a>':esc(t.number))+'</b></span>');
        });
      });
      if(o.statusUrl) meta.push('<span><a class="order-track-link" href="'+esc(o.statusUrl)+'" target="_blank" rel="noopener">Track this order</a></span>');
      var steps='<div class="track">'
        +'<div class="track-step done'+(shipped?'':' current')+'"><span class="dot">'+CHECK+'</span><span class="lbl">Order placed</span></div>'
        +'<div class="track-step'+(shipped?' done current':'')+'"><span class="dot">'+(shipped?CHECK:'')+'</span><span class="lbl">Shipped</span></div>'
        +'<div class="track-step"><span class="dot"></span><span class="lbl">Out for delivery</span></div>'
        +'<div class="track-step"><span class="dot"></span><span class="lbl">Delivered</span></div></div>';
      return '<article class="order-card"><div class="order-top"><div><div class="onum">Order '+esc(o.name)+'</div>'
        +'<div class="odate">Placed '+esc(fmtDate(o.processedAt))+'</div></div>'+chip+'</div>'
        +'<div class="order-items">'+items+'</div>'
        +'<div class="order-meta">'+meta.join('')+'</div>'+steps+'</article>';
    }).join('');
  }

  function loadOrders(){
    var a=getAuth();
    if(!a || !a.token) return Promise.reject(new Error('signed_out'));
    return api({op:'orders', token:a.token}).then(function(d){
      if(d && d.customer){ renderOrders(d.customer); showDash(); return true; }
      setAuth(null); throw new Error((d && d.error) || 'signed_out');
    });
  }

  /* email + SSO sign-in.
     Demo until the backend is live; real Shopify accounts after. */
  var authForm=document.getElementById('authForm');
  if(authForm) authForm.addEventListener('submit',function(e){
    e.preventDefault(); hideAuthErr();
    var at=document.querySelector('.auth-tab.active');
    var mode=at ? at.getAttribute('data-mode') : 'signin';
    var g=function(id){ var el=document.getElementById(id); return el?el.value.trim():''; };
    if(mode==='signup'){
      /* Netlify Forms capture (the auto-updating customer list) — name/email/
         company/phone only, never the password. Runs in demo AND live mode. */
      var body=new URLSearchParams({ 'form-name':'customer-signups', fullname:g('fullname'), email:g('email'), company:g('company'), phone:g('phone') });
      fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()}).catch(function(){});
    }
    if(!LIVE.configured){ showDash(); return; }
    var email=g('email'), pass=g('password');
    if(!email || !pass){ showAuthErr('Enter your email and a password.'); return; }
    var sb=document.getElementById('authSubmit'); if(sb) sb.disabled=true;
    var done=function(){ if(sb) sb.disabled=false; };
    var p;
    if(mode==='signup'){
      var full=g('fullname'), sp=full.indexOf(' ');
      p=api({op:'signup', email:email, password:pass,
             firstName: sp>0 ? full.slice(0,sp) : full,
             lastName:  sp>0 ? full.slice(sp+1) : ''});
    } else {
      p=api({op:'signin', email:email, password:pass});
    }
    p.then(function(d){
      if(d && d.token){
        setAuth({token:d.token, expiresAt:d.expiresAt||null});
        return loadOrders().catch(function(){ showDash(); });
      }
      showAuthErr((d && d.error) || 'Something went wrong. Try again or email customerservice@michiganshippers.com.');
    }).then(done, function(){ done(); showAuthErr('Could not reach the account service. Please try again in a minute.'); });
  });

  /* SSO tiles are part of the demo preview only (Shopify accounts are email +
     password); they're hidden once the backend goes live */
  Array.prototype.forEach.call(document.querySelectorAll('[data-sso]'),function(b){
    b.addEventListener('click',function(){ if(!LIVE.configured) showDash(); });
  });

  var forgot=document.getElementById('forgotLink');
  if(forgot) forgot.addEventListener('click',function(e){
    e.preventDefault(); hideAuthErr();
    var el=document.getElementById('email'), email=el?el.value.trim():'';
    if(!email){ showAuthErr('Enter your email above first, then tap "Forgot your password?" again.'); return; }
    api({op:'recover', email:email}).then(function(d){
      showAuthErr(d && d.ok ? 'Password reset sent — check your inbox.' : ((d && d.error) || 'Could not send the reset email.'));
    }).catch(function(){ showAuthErr('Could not reach the account service. Please try again in a minute.'); });
  });

  var signOut=document.getElementById('signOut');
  if(signOut) signOut.addEventListener('click',function(){
    var a=getAuth();
    if(LIVE.configured && a && a.token) api({op:'signout', token:a.token}).catch(function(){});
    setAuth(null); showLogin();
  });

  /* ---------------- boot the live backend (if configured) ---------------- */
  api({op:'catalog'}).then(function(d){
    if(!(d && d.configured && d.variants)) return; // stay in demo mode
    LIVE.configured=true;
    applyLiveCatalog(d.variants);
    /* live-mode account UI: email+password is the real sign-in */
    var sso=document.getElementById('ssoBlock'); if(sso) sso.style.display='none';
    var dv=document.querySelector('.auth-divider'); if(dv) dv.textContent='Sign in with your email';
    var fp=document.getElementById('forgotPw'); if(fp) fp.style.display='';
    /* returning customer with a saved session → straight to their real orders */
    if(getAuth() && loginView) loadOrders().catch(function(){ showLogin(); });
  }).catch(function(){ /* not deployed / offline → demo mode */ });

})();
