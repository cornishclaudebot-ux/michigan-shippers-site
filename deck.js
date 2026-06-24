/* ============================================================
   DECK fly-through — Michigan Shippers Supply store intro
   ------------------------------------------------------------
   peachweb-style: the product cards line up ONE BEHIND ANOTHER on
   a single straight track (receding to the back-right), then on
   scroll the whole line zooms forward and flies OFF THE LEFT EDGE
   of the screen, one after another (right → left). Then it hands
   off to the real shop grid below.
   Pure CSS-3D + scroll-driven transforms (transform/opacity only).
   Builds its cards from window.MSS.catalog (set by store.js).
   ============================================================ */
(function(){
  "use strict";
  var stage = document.getElementById('deckStage');
  var deck  = document.getElementById('deck');
  if(!stage || !deck || !window.MSS) return;

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var catalog = window.MSS.catalog, icon = window.MSS.icon;
  function money(n){ return '$' + Number(n).toFixed(2).replace(/\.00$/,''); }

  /* pick 2 priced products per category for a colorful, varied deck */
  var picks = [];
  catalog.forEach(function(c){
    var items = c.items.filter(function(it){ return it.price>0; });
    [items[0], items[Math.min(2, items.length-1)]].forEach(function(it){ if(it) picks.push({ it:it, cls:'c-'+c.id, ic: it.img ? '<img class="dc-photo" src="'+it.img+'" alt="">' : ((window.MSS_ART && window.MSS_ART[it.id]) || icon(c.id)) }); });
  });

  var n = picks.length, nodes = [];
  picks.forEach(function(p){
    var el = document.createElement('div');
    el.className = 'deck-card ' + p.cls;
    el.innerHTML =
      '<div class="dc-top">' + p.ic + '</div>' +
      '<div class="dc-meta"><span class="dc-tag">' + p.it.tag + '</span>' +
      '<span class="dc-name">' + p.it.name + '</span>' +
      '<span class="dc-price">' + money(p.it.price) + '</span></div>';
    deck.appendChild(el);
    nodes.push(el);
  });

  /* reduced motion: a static aligned line, no scroll animation */
  if(reduce){
    nodes.forEach(function(el, i){
      var show = i < 6;
      el.style.opacity = show ? 1 : 0;
      el.style.transform = 'translate(-50%,-50%) translate3d(' + (300 - i*120) + 'px,' + (-70 + i*28) + 'px,' + (-i*200) + 'px) rotateY(-12deg)';
      if(!show) el.style.visibility = 'hidden';
    });
    return;
  }

  /* one straight track: t=0 at the back of the line (right, up, far/small),
     t=1 past the camera and off the LEFT edge (down, near/large). All cards
     follow the SAME track, staggered by index, so they line up behind each other. */
  var X0 = 1150, Y0 = -130, Z0 = -1900;   // back of the line (further right = deck starts on the right)
  var X1 = -1180, Y1 = 80,  Z1 = 470;     // exit, off the left edge
  var ROTY = -12;                          // slight, consistent facing
  /* OFFSET shifts the line so it's already lined up + visible at rest (p=0), right under the hero;
     SPACING controls how far apart the cards are (peachweb-style, distinct but overlapping);
     SPEED tuned so the last card flies off the left edge exactly at p=1. */
  var SPACING = 0.08, OFFSET = 0.34, CARDS_END = 0.58;   // ALL cards have flown off by p=0.58; clear gap before the logo
  var SPEED = (1 + (n-1)*SPACING - OFFSET) / CARDS_END;

  var stageTop = 0, stageH = 0, vh = 0;
  function measure(){
    var r = stage.getBoundingClientRect();
    stageTop = r.top + window.pageYOffset;
    stageH = stage.offsetHeight;
    vh = window.innerHeight;
  }
  function progress(){
    var d = window.pageYOffset - stageTop, t = stageH - vh;
    return t > 0 ? Math.max(0, Math.min(1, d/t)) : 0;
  }
  function lerp(a,b,t){ return a + (b-a)*t; }

  var cue = document.getElementById('deckCue');
  var heroEl = document.querySelector('.deck-hero');
  var brandEl = document.getElementById('siBrand');

  function render(){
    var p = progress();
    for(var i=0;i<n;i++){
      var t = p*SPEED - i*SPACING + OFFSET;   // this card's position along the track (OFFSET = the at-rest line)
      var el = nodes[i];
      if(t <= 0 || t >= 1){ el.style.opacity = 0; el.style.visibility = 'hidden'; continue; }
      var x = lerp(X0, X1, t), y = lerp(Y0, Y1, t), z = lerp(Z0, Z1, t);
      var op = t < 0.06 ? t/0.06 : (t > 0.88 ? (1-t)/0.12 : 1);   // fade in from deep, fade as it leaves left
      el.style.opacity = op;
      el.style.visibility = op <= 0.01 ? 'hidden' : 'visible';
      el.style.transform = 'translate(-50%,-50%) translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,' + z.toFixed(1) + 'px) rotateY(' + ROTY + 'deg)';
    }
    if(cue) cue.style.opacity = p < 0.06 ? 1 : (p > 0.18 ? 0 : 1 - (p-0.06)/0.12);
    /* crossfade: hero (title + pills) fades out, the branded SHOP logo fades in, as the cards fly off */
    if(heroEl) heroEl.style.opacity = p < 0.5 ? 1 : Math.max(0, 1 - (p-0.5)/0.15);
    if(brandEl) brandEl.style.opacity = p < 0.64 ? 0 : Math.min(1, (p-0.64)/0.2);   // logo only AFTER all cards are gone (p>0.62)
  }

  var ticking = false;
  function onScroll(){ if(!ticking){ ticking = true; requestAnimationFrame(function(){ render(); ticking = false; }); } }
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', function(){ measure(); render(); });

  function init(){ measure(); render(); }
  if(document.readyState !== 'loading') setTimeout(init, 80);
  else window.addEventListener('DOMContentLoaded', function(){ setTimeout(init, 80); });
  window.addEventListener('load', function(){ setTimeout(init, 180); });
})();
