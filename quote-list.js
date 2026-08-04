/* ============================================================
   QUOTE LIST — Michigan Shippers Supply
   ------------------------------------------------------------
   A multi-line quote basket for the label browse pages.

   WHY THIS IS NOT A CART: we print custom. There is no published
   label price anywhere on this site and every price defers to a
   labeling specialist. So a row is a POPULAR STARTING SPEC, not a
   stocked SKU, and the action is "Add to Quote List", never
   "Add to Cart" and never a price. B2B buyers usually need several
   specs at once (same label in three sizes, two materials), and
   making them submit three separate forms loses the order.

   WHY IT FEEDS THE EXISTING FORM: Netlify only registers a form at
   build time, and this account's builds are currently blocked, so a
   brand new form would silently collect nothing. Instead the list
   serialises into the message field of the EXISTING "quote" form on
   index.html#contact, which is already registered and already emails
   customerservice@michiganshippers.com. Nothing new to register.
   ============================================================ */
(function(){
  "use strict";

  var KEY = 'mssQuoteList';

  function read(){
    try { var v = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v : []; }
    catch(e){ return []; }
  }
  function write(list){
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch(e){}
    paint();
  }
  /* A sub-label (a colour, a month, a legend) is its own quotable line, so the
     key includes it. Without it, adding Red then Blue would collide into one row. */
  function keyOf(it){ return [it.cat, it.label, it.sub || '', it.size, it.material].join('|'); }

  function add(it){
    var list = read();
    var k = keyOf(it);
    for(var i=0;i<list.length;i++){
      if(keyOf(list[i])===k){ list[i].qty = (list[i].qty||1)+1; write(list); return list[i].qty; }
    }
    it.qty = 1;
    list.push(it);
    write(list);
    return 1;
  }
  function removeAt(i){ var l=read(); l.splice(i,1); write(l); }
  function setQty(i,q){ var l=read(); if(l[i]){ l[i].qty=Math.max(1,q|0); write(l);} }
  function clear(){ write([]); }

  /* ---- plain-text serialisation for the quote email ---- */
  function toText(){
    var l = read();
    if(!l.length) return '';
    var out = ['Quote list from the website:',''];
    l.forEach(function(it,i){
      out.push((i+1)+'. '+it.label + (it.sub ? '  ['+it.subAxis+': '+it.sub+']' : ''));
      out.push('   Category: '+it.catName);
      out.push('   Size: '+it.size+'   Format: '+it.format);
      out.push('   Material: '+it.material+'   Adhesive: '+it.adhesive);
      if(it.qty>1) out.push('   Lines requested: '+it.qty);
      out.push('');
    });
    out.push('These are starting specs picked from the website. Please confirm or adjust.');
    return out.join('\n');
  }

  /* ---- sticky tray ---- */
  var tray;
  function ensureTray(){
    if(tray || !document.body) return;
    tray = document.createElement('div');
    tray.className = 'qtray';
    tray.setAttribute('role','status');
    tray.innerHTML =
      '<div class="qtray-in">'+
        '<span class="qtray-n"><b data-q="count">0</b> <span data-q="word">items</span> on your quote list</span>'+
        '<a class="qtray-go" href="index.html#contact">Review and request quote</a>'+
        '<button class="qtray-clear" type="button" aria-label="Clear quote list">Clear</button>'+
      '</div>';
    document.body.appendChild(tray);
    tray.querySelector('.qtray-clear').addEventListener('click', function(){ clear(); });
  }

  function paint(){
    var l = read(), n = 0;
    l.forEach(function(it){ n += (it.qty||1); });
    ensureTray();
    if(tray){
      tray.classList.toggle('show', l.length>0);
      var c=tray.querySelector('[data-q="count"]'), w=tray.querySelector('[data-q="word"]');
      if(c) c.textContent = n;
      if(w) w.textContent = n===1 ? 'item' : 'items';
    }
    /* reflect state on any add buttons currently on the page */
    document.querySelectorAll('[data-add]').forEach(function(btn){
      var k = btn.getAttribute('data-key');
      var on = l.some(function(it){ return keyOf(it)===k; });
      btn.classList.toggle('added', on);
      /* sub-label chips are small and read as a set, so they only tint.
         Swapping their text to "On your list" would reflow the whole grid. */
      if(btn.classList.contains('qsub')) return;
      if(on && btn.dataset.orig===undefined){ btn.dataset.orig = btn.textContent; btn.textContent = 'On your list'; }
      if(!on && btn.dataset.orig!==undefined){ btn.textContent = btn.dataset.orig; delete btn.dataset.orig; }
    });

    /* show how many of a row's sub-labels are already on the list */
    document.querySelectorAll('[data-expand]').forEach(function(t){
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if(!panel) return;
      var keys = [].map.call(panel.querySelectorAll('[data-add]'), function(b){ return b.getAttribute('data-key'); });
      var n = l.filter(function(it){ return keys.indexOf(keyOf(it)) !== -1; }).length;
      var badge = t.querySelector('[data-picked]');
      if(badge){ badge.textContent = n ? n + ' picked' : ''; badge.hidden = !n; }
    });
  }

  /* ---- wire up the rows on a category page ---- */
  function bind(){
    document.querySelectorAll('[data-add]').forEach(function(btn){
      if(btn.__bound) return;
      btn.__bound = true;
      btn.addEventListener('click', function(){
        var d = btn.dataset;
        add({ cat:d.cat, catName:d.catname, label:d.label, size:d.size,
              format:d.format, material:d.material, adhesive:d.adhesive,
              sub:d.sub || '', subAxis:d.subaxis || '' });
      });
    });
    /* stamp a stable key on each button so paint() can match it */
    document.querySelectorAll('[data-add]').forEach(function(btn){
      var d = btn.dataset;
      btn.setAttribute('data-key', [d.cat,d.label,d.sub||'',d.size,d.material].join('|'));
    });

    /* expand a row into its sub-labels. Inline, not a page load: picking six
       colours should never cost six navigations, and the quote tray has to stay
       on screen while you tick them off. */
    document.querySelectorAll('[data-expand]').forEach(function(t){
      if(t.__bound) return;
      t.__bound = true;
      t.addEventListener('click', function(){
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if(!panel) return;
        var open = t.getAttribute('aria-expanded') === 'true';
        t.setAttribute('aria-expanded', open ? 'false' : 'true');
        panel.hidden = open;
      });
    });
  }

  /* ---- on the contact page, pour the list into the real quote form ---- */
  function prefill(){
    var msg = document.getElementById('msg');
    if(!msg) return;
    var txt = toText();
    if(!txt) return;
    /* never clobber something the visitor already typed */
    if(msg.value.indexOf('Quote list from the website:') === -1){
      msg.value = txt + (msg.value ? '\n' + msg.value : '');
    }
    var sel = document.getElementById('quantity');
    var note = document.createElement('p');
    note.className = 'qprefill';
    note.textContent = 'We added your quote list above. Edit it freely, or clear it and tell us in your own words.';
    if(msg.parentNode) msg.parentNode.insertBefore(note, msg.nextSibling);
    if(sel && sel.value === '') { /* leave quantity for the visitor, we do not guess */ }
  }

  function init(){ bind(); paint(); prefill(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.MSSQuote = { add:add, removeAt:removeAt, setQty:setQty, clear:clear, all:read, toText:toText, refresh:init };
})();
