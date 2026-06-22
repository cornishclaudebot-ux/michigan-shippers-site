/* Michigan Shippers Supply — shared immersive press engine.
   Drives the preloader, the scroll-fed label ribbon, scroll reveals, and the nav.
   Every page (index / labels / about) loads this so behaviour stays identical. */
(function(){
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- PRELOADER messages ---- */
  var msgs=['Warming up the press…','Mixing the inks…','Loading the label stock…','Calibrating the die-cut…','Ready to print.'];
  var preMsg=document.getElementById('preMsg'), mi=0;
  if(preMsg){
    var msgTimer=setInterval(function(){mi++;if(mi<msgs.length&&preMsg)preMsg.innerHTML=msgs[mi];},560);
  }
  function hidePre(){if(typeof msgTimer!=='undefined')clearInterval(msgTimer);var p=document.getElementById('pre');if(p)p.classList.add('gone');}
  window.addEventListener('load',function(){setTimeout(hidePre,reduce?300:2600);});
  setTimeout(hidePre,5200); /* safety */

  /* ---- BUILD RIBBON LABELS (print order) ---- */
  var labels=[
    {cls:'logo', html:'<img src="images/logo-horizontal.png" alt="Michigan Shippers Supply logo" onerror="this.src=\'images/logo-master.png\'">'},
    {cls:'stamp',html:'<div class="big">EST. 1969</div><div class="sub">Spring Lake, MI</div>'},
    {cls:'lid',  html:'<img class="lid" src="images/customers/crazy-cups-raspberry.jpg" alt="Crazy Cups Raspberry Truffle lid"><div class="cap">Crazy Cups</div><div class="sub">Raspberry Truffle</div>'},
    {cls:'label',html:'<img class="labelimg" src="images/labels/attention-earth-ground.png" alt="Attention connect to earth ground safety label printed by Michigan Shippers Supply">'},
    {cls:'lid',  html:'<img class="lid" src="images/customers/lake-lodge.jpg" alt="Green Mountain Lake and Lodge lid"><div class="cap">Green Mountain</div><div class="sub">Lake &amp; Lodge</div>'},
    {cls:'label',html:'<img class="labelimg" src="images/labels/warning-sight-glass.png" alt="Warning sight glass max pressure safety label printed by Michigan Shippers Supply">'},
    {cls:'label',html:'<img class="labelimg" src="images/labels/toms-food-markets.png" alt="Tom\'s Food Markets grocery label printed by Michigan Shippers Supply">'},
    {cls:'lid',  html:'<img class="lid" src="images/customers/brooklyn-bean.jpg" alt="Brooklyn Bean Carnival cocoa lid"><div class="cap">Brooklyn Bean</div><div class="sub">Carnival Cocoa</div>'},
    {cls:'label',html:'<img class="labelimg" src="images/labels/fortinos.png" alt="Fortino\'s restaurant branded label printed by Michigan Shippers Supply">'},
    {cls:'label',html:'<img class="labelimg" src="images/labels/videojet.png" alt="Videojet industrial part number label printed by Michigan Shippers Supply">'},
    {cls:'lid',  html:'<img class="lid" src="images/customers/mucho-gusto.jpg" alt="Mucho Gusto Chocolate con Leche lid"><div class="cap">Mucho Gusto</div><div class="sub">Chocolate con Leche</div>'},
    {cls:'label',html:'<img class="labelimg" src="images/labels/carlon-meter.png" alt="Carlon Meter model and serial number label printed by Michigan Shippers Supply">'},
    {cls:'label',html:'<img class="labelimg" src="images/labels/aventics.png" alt="Aventics compliance and wiring label printed by Michigan Shippers Supply">'},
    {cls:'lid',  html:'<img class="lid" src="images/customers/crazy-cups-coconut.jpg" alt="Crazy Cups Island Rum Coconut lid"><div class="cap">Crazy Cups</div><div class="sub">Island Rum Coconut</div>'},
    {cls:'cta',  html:'<div class="big">GET A QUOTE</div><div class="sub">customerservice@michiganshippers.com</div>'}
  ];
  var track=document.getElementById('track');
  var nodes=[];
  if(track){
    labels.forEach(function(l){
      var d=document.createElement('div');
      d.className='plabel '+l.cls;
      d.innerHTML='<span class="fresh"></span>'+l.html;
      track.appendChild(d);
      nodes.push(d);
    });
  }

  /* ---- SCROLL-DRIVEN FEED ---- */
  var n=nodes.length,targets=[],maxScroll=0;
  /* each label's translateY to bring it to the slot; maxScroll cached so frame() does zero layout reads */
  function measure(){
    targets=nodes.map(function(el){return -el.offsetTop;});
    maxScroll=document.documentElement.scrollHeight-window.innerHeight;
  }
  /* re-measure once ribbon images load (their heights settle the spacing) */
  if(track){
    var rimgs=[].slice.call(track.querySelectorAll('img'));
    var pend=rimgs.length;
    var imgDone=function(){ if(--pend<=0){ measure(); onScroll(); } };
    rimgs.forEach(function(im){ if(im.complete&&im.naturalWidth){ imgDone(); } else { im.addEventListener('load',imgDone); im.addEventListener('error',imgDone); } });
  }
  var ticking=false, navEl=document.getElementById('nav'), navSolid=false;
  function frame(){
    var p=maxScroll>0?Math.min(1,Math.max(0,window.scrollY/maxScroll)):0;
    if(!reduce && track && n){
      var t=p*(n-1),ti=Math.floor(t);if(ti>n-2)ti=n-2;if(ti<0)ti=0;
      var frac=t-ti,ty=targets.length?targets[ti]+(targets[ti+1]-targets[ti])*frac:0;
      track.style.transform='translate3d(0,'+ty+'px,0)';
      /* printed state from pure math (no getBoundingClientRect = no per-frame layout) */
      for(var i=0;i<n;i++){
        if(ty-targets[i]>=-20 && !nodes[i].classList.contains('printed')){
          nodes[i].classList.add('printed','printing');
          (function(el){setTimeout(function(){el.classList.remove('printing');},560);})(nodes[i]);
        }
      }
    }
    if(navEl){ var s=window.scrollY>60; if(s!==navSolid){navSolid=s;navEl.classList.toggle('solid',s);} }
    ticking=false;
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(frame);}}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',function(){measure();onScroll();});

  /* ---- REVEAL on scroll ---- */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:.18,rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  }else{
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});
  }

  /* init after layout settles */
  function init(){measure();frame();}
  if(document.readyState!=='loading')setTimeout(init,60);
  else window.addEventListener('DOMContentLoaded',function(){setTimeout(init,60);});
  window.addEventListener('load',function(){setTimeout(init,120);});
})();
