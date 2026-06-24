/* ============================================================
   PRODUCT ART — Michigan Shippers Supply
   ------------------------------------------------------------
   Hand-crafted, on-brand SVG illustrations, one per product type.
   White line+fill art on a transparent ground, so each sits on its
   category-colored card panel. window.MSS_ART maps every product id
   to its illustration; store.js renders it in the product card .pic.
   (Swap any entry for a real photo later by setting it.img instead.)
   ============================================================ */
window.MSS_ART = (function(){
  "use strict";
  function S(b){
    return '<svg viewBox="0 0 120 120" fill="none" stroke="#ffffff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+b+'</svg>';
  }
  var F = 'rgba(255,255,255,.13)';   // light fill
  var F2 = 'rgba(255,255,255,.07)';  // fainter fill

  var TYPES = {
    /* ---- printers ---- */
    'printer-desktop': S(
      '<rect x="24" y="49" width="72" height="33" rx="6" fill="'+F+'"/>'+
      '<path d="M37 49 V37 a3 3 0 0 1 3-3 H80 a3 3 0 0 1 3 3 V49"/>'+
      '<rect x="38" y="82" width="44" height="21" rx="2" fill="'+F2+'"/>'+
      '<path d="M46 90 H74 M46 96 H66"/>'+
      '<circle cx="85" cy="62" r="2.7" fill="#fff" stroke="none"/>'+
      '<path d="M31 62 H41"/>'),
    'printer-industrial': S(
      '<rect x="25" y="29" width="70" height="63" rx="6" fill="'+F+'"/>'+
      '<rect x="34" y="37" width="33" height="18" rx="2" fill="'+F2+'"/>'+
      '<circle cx="79" cy="44" r="7"/><circle cx="79" cy="44" r="2" fill="#fff" stroke="none"/>'+
      '<path d="M34 68 H86"/>'+
      '<rect x="40" y="92" width="40" height="15" rx="2" fill="'+F2+'"/>'+
      '<path d="M47 99 H73"/>'),
    'printhead': S(
      '<rect x="46" y="28" width="28" height="13" rx="2" fill="'+F+'"/>'+
      '<rect x="26" y="41" width="68" height="17" rx="3" fill="'+F+'"/>'+
      '<path d="M33 58 V66 M41 58 V66 M49 58 V66 M57 58 V66 M65 58 V66 M73 58 V66 M81 58 V66 M89 58 V66"/>'),
    /* ---- ribbons ---- */
    'ribbon': S(
      '<path d="M34 40 a26 8 0 0 1 52 0 V78 a26 8 0 0 1 -52 0 Z" fill="'+F+'"/>'+
      '<ellipse cx="60" cy="40" rx="26" ry="8"/>'+
      '<ellipse cx="60" cy="40" rx="10" ry="3.5"/>'+
      '<path d="M34 40 V78 a26 8 0 0 0 52 0 V40"/>'+
      '<path d="M44 84 q4 14 16 14" stroke-width="2.6"/>'),
    /* ---- markers & coding ---- */
    'marker': S(
      '<rect x="51" y="35" width="18" height="49" rx="4" fill="'+F+'"/>'+
      '<path d="M51 84 L60 100 L69 84 Z" fill="rgba(255,255,255,.24)"/>'+
      '<rect x="49" y="24" width="22" height="12" rx="3"/>'+
      '<path d="M55 50 H65"/>'),
    'marker-set': S(
      '<rect x="33" y="42" width="13" height="42" rx="3" fill="'+F2+'"/>'+
      '<rect x="53" y="36" width="14" height="48" rx="3" fill="'+F+'"/>'+
      '<rect x="73" y="42" width="13" height="42" rx="3" fill="'+F2+'"/>'+
      '<path d="M33 84 l6.5 11 l6.5 -11 M53 84 l7 12 l7 -12 M73 84 l6.5 11 l6.5 -11"/>'),
    'fluid-bottle': S(
      '<path d="M45 51 H75 V96 a5 5 0 0 1 -5 5 H50 a5 5 0 0 1 -5 -5 Z" fill="'+F+'"/>'+
      '<rect x="52" y="35" width="16" height="16" rx="2" fill="'+F2+'"/>'+
      '<rect x="50" y="26" width="20" height="10" rx="2"/>'+
      '<path d="M51 70 H69"/>'),
    'cartridge': S(
      '<rect x="35" y="44" width="50" height="42" rx="4" fill="'+F+'"/>'+
      '<path d="M51 44 V34 H69 V44"/>'+
      '<rect x="44" y="62" width="32" height="15" rx="2" fill="'+F2+'"/>'+
      '<circle cx="60" cy="53" r="2.6" fill="#fff" stroke="none"/>'),
    /* ---- rollers & applicators ---- */
    'applicator-hand': S(
      '<rect x="40" y="40" width="48" height="17" rx="4" fill="'+F+'"/>'+
      '<path d="M55 57 V72 a5 5 0 0 0 5 5 H67"/>'+
      '<path d="M40 49 H30 a4 4 0 0 0 -4 4 V61"/>'+
      '<circle cx="80" cy="48" r="3.2"/>'+
      '<path d="M26 86 H58" stroke-width="2.6"/>'),
    'applicator-table': S(
      '<rect x="24" y="78" width="72" height="9" rx="2" fill="'+F+'"/>'+
      '<circle cx="42" cy="56" r="15" fill="'+F2+'"/><circle cx="42" cy="56" r="4"/>'+
      '<circle cx="78" cy="62" r="9"/>'+
      '<path d="M42 71 H78"/>'+
      '<path d="M34 87 V96 M86 87 V96"/>'),
    'roller': S(
      '<rect x="30" y="44" width="60" height="20" rx="10" fill="'+F+'"/>'+
      '<path d="M60 64 V80 M48 80 H72"/>'+
      '<path d="M40 54 H80" stroke-width="2.4" opacity=".7"/>'),
    'applicator-bottle': S(
      '<path d="M50 40 H70 V52 l8 6 V92 a4 4 0 0 1 -4 4 H46 a4 4 0 0 1 -4 -4 V58 l8 -6 Z" fill="'+F+'"/>'+
      '<rect x="53" y="30" width="14" height="10" rx="2"/>'+
      '<rect x="46" y="70" width="28" height="16" rx="2" fill="'+F2+'"/><path d="M52 78 H68"/>'),
    'squeegee': S(
      '<rect x="34" y="40" width="52" height="12" rx="3" fill="'+F+'"/>'+
      '<path d="M40 52 L44 84 H76 L80 52" fill="'+F2+'"/>'+
      '<path d="M44 84 H76"/>'),
    /* ---- uv varnish & coatings ---- */
    'varnish-jug': S(
      '<path d="M40 50 H80 V96 a4 4 0 0 1 -4 4 H44 a4 4 0 0 1 -4 -4 Z" fill="'+F+'"/>'+
      '<path d="M56 50 V40 H72 a4 4 0 0 1 4 4 V50"/>'+
      '<rect x="56" y="30" width="14" height="10" rx="2"/>'+
      '<rect x="47" y="64" width="26" height="20" rx="2" fill="'+F2+'"/>'+
      '<path d="M53 72 H67 M53 78 H62"/>'),
    'film-roll': S(
      '<ellipse cx="60" cy="50" rx="28" ry="10" fill="'+F+'"/>'+
      '<path d="M32 50 V72 a28 10 0 0 0 56 0 V50"/>'+
      '<ellipse cx="60" cy="50" rx="9" ry="3"/>'+
      '<path d="M88 60 q10 2 10 12 l-6 -3 M92 69 l-6 3" stroke-width="2.6"/>'),
    'kit': S(
      '<rect x="30" y="46" width="60" height="40" rx="4" fill="'+F+'"/>'+
      '<path d="M30 58 H90"/>'+
      '<path d="M50 46 V40 a4 4 0 0 1 4-4 H66 a4 4 0 0 1 4 4 V46"/>'+
      '<path d="M60 58 V72 M53 65 H67" stroke-width="3"/>'),
    /* ---- barcodes & scanning ---- */
    'barcode': S(
      '<rect x="26" y="34" width="68" height="52" rx="4" fill="'+F2+'"/>'+
      '<path d="M36 44 V76 M43 44 V76 M49 44 V76 M57 44 V76 M62 44 V76 M70 44 V76 M76 44 V76 M84 44 V76" stroke-width="3"/>'),
    'barcode-check': S(
      '<rect x="24" y="32" width="62" height="48" rx="4" fill="'+F2+'"/>'+
      '<path d="M33 42 V70 M40 42 V70 M46 42 V70 M54 42 V70 M59 42 V70 M67 42 V70 M73 42 V70" stroke-width="2.8"/>'+
      '<circle cx="86" cy="80" r="14" fill="rgba(255,255,255,.16)"/>'+
      '<path d="M80 80 l4 4 l8 -9" stroke-width="3"/>'),
    'scanner': S(
      '<path d="M58 30 H74 a6 6 0 0 1 6 6 V52 a6 6 0 0 1 -6 6 H58 Z" fill="'+F+'"/>'+
      '<path d="M58 44 H46 a6 6 0 0 0 -6 6 V90 a6 6 0 0 0 6 6 H56 a6 6 0 0 0 6 -6 V44" fill="'+F2+'"/>'+
      '<path d="M80 42 H92" stroke-width="2.6"/><path d="M84 36 L94 32 M84 50 L94 54" stroke-width="2.4"/>'+
      '<path d="M47 66 H55"/>'),
    /* ---- software ---- */
    'software': S(
      '<rect x="26" y="32" width="68" height="50" rx="5" fill="'+F+'"/>'+
      '<path d="M26 44 H94"/>'+
      '<circle cx="33" cy="38" r="1.8" fill="#fff" stroke="none"/><circle cx="40" cy="38" r="1.8" fill="#fff" stroke="none"/>'+
      '<path d="M52 64 L44 57 L52 50 M68 50 L76 57 L68 64" stroke-width="3"/>'+
      '<path d="M48 92 H72 M60 82 V92" stroke-width="2.8"/>'),
    'training': S(
      '<rect x="26" y="32" width="68" height="46" rx="5" fill="'+F+'"/>'+
      '<path d="M48 88 H72 M60 78 V88" stroke-width="2.8"/>'+
      '<circle cx="60" cy="48" r="7" fill="'+F2+'"/>'+
      '<path d="M47 66 q13 -14 26 0" stroke-width="3"/>'),
    /* ---- custom orders ---- */
    'doc': S(
      '<path d="M38 26 H66 L82 42 V92 a4 4 0 0 1 -4 4 H38 a4 4 0 0 1 -4 -4 V30 a4 4 0 0 1 4 -4 Z" fill="'+F+'"/>'+
      '<path d="M66 26 V42 H82"/>'+
      '<path d="M44 58 H72 M44 68 H72 M44 78 H62" stroke-width="2.8"/>'),
    'boxes': S(
      '<path d="M30 56 L48 48 L66 56 L48 64 Z" fill="'+F+'"/><path d="M30 56 V76 L48 84 V64 M66 56 V76 L48 84" />'+
      '<path d="M58 44 L76 36 L94 44 L76 52 Z" fill="'+F2+'"/><path d="M58 44 V62 L76 70 V52 M94 44 V62 L76 70"/>'),
    'die': S(
      '<rect x="30" y="34" width="60" height="52" rx="6" fill="'+F2+'"/>'+
      '<path d="M60 46 a14 14 0 1 0 0.01 0" fill="rgba(255,255,255,.14)" stroke-dasharray="5 5"/>'+
      '<path d="M86 30 L98 42 L92 48 L80 36 Z" fill="'+F+'"/>'),
    'rush': S(
      '<circle cx="60" cy="62" r="30" fill="'+F2+'"/>'+
      '<path d="M62 44 L50 66 H60 L58 82 L72 58 H62 Z" fill="rgba(255,255,255,.22)"/>'+
      '<path d="M60 32 V24 M88 34 L94 28" stroke-width="2.6"/>')
  };

  var MAP = {
    'zebra-zd621':'printer-desktop', 'zebra-gk420d':'printer-desktop',
    'zebra-zt411':'printer-industrial', 'datamax-iclass':'printer-industrial', 'honeywell-pm45':'printer-industrial',
    'printhead-203':'printhead',
    'tt-wax-433':'ribbon','tt-waxresin-433':'ribbon','tt-resin-433':'ribbon','tt-wax-236':'ribbon','tt-color':'ribbon','tt-nearedge':'ribbon',
    'pm-white':'marker','pm-yellow':'marker','pm-12pack':'marker-set','cd-makeup':'fluid-bottle','cd-cartridge':'cartridge',
    'app-hand':'applicator-hand','app-table':'applicator-table','app-roller':'roller','app-bottle':'applicator-bottle','app-squeegee':'squeegee',
    'uv-gloss':'varnish-jug','uv-matte':'varnish-jug','lam-film':'film-roll','spot-uv':'kit',
    'bc-gs1':'barcode','bc-verify':'barcode-check','bc-usb':'scanner','bc-wireless':'scanner',
    'sw-bartender-start':'software','sw-bartender-pro':'software','sw-nicelabel':'software','sw-training':'training',
    'cu-quote':'doc','cu-managed':'boxes','cu-die':'die','cu-rush':'rush'
  };

  var out = {};
  for(var id in MAP){ if(TYPES[MAP[id]]) out[id] = TYPES[MAP[id]]; }
  return out;
})();
