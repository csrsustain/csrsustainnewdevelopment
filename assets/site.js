
(function(){
  var h=document.getElementById('hdr');
  if(h && !h.classList.contains('opaque')){
    var sc=function(){h.classList.toggle('solid',window.scrollY>40)};
    window.addEventListener('scroll',sc);sc();
  }
  var b=document.getElementById('burger');
  if(b)b.addEventListener('click',function(){document.getElementById('menu').classList.toggle('open')});
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
  },{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
  var f=document.getElementById('enqf');
  if(f)f.addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById('fmsg').textContent='This is a mockup — the form is not connected.';
  });
})();
