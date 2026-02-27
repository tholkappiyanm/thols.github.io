// PROGRESS BAR
window.addEventListener('scroll',function(){
  var s=document.documentElement,b=document.body;
  var p=(s.scrollTop||b.scrollTop)/(s.scrollHeight-s.clientHeight)*100;
  document.getElementById('progress').style.width=p+'%';
});

// SCROLL ANIMATIONS
var obs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
  });
},{threshold:0.12});
document.querySelectorAll('.sa,.sa-left,.sa-right').forEach(function(el){obs.observe(el);});

// SKILL BARS
var bObs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.style.width=e.target.dataset.w+'%';
      bObs.unobserve(e.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.bar-fill').forEach(function(b){bObs.observe(b);});

// NAV ACTIVE
var sections=document.querySelectorAll('section[id]');
var navLinks=document.querySelectorAll('nav a');
var navObs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      navLinks.forEach(function(a){a.classList.remove('active');});
      var l=document.querySelector('nav a[href="#'+e.target.id+'"]');
      if(l)l.classList.add('active');
    }
  });
},{threshold:0.4});
sections.forEach(function(s){navObs.observe(s);});

// FLOATING PARTICLES
document.addEventListener('DOMContentLoaded', function() {
  var particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);
  for (var i = 0; i < 50; i++) {
    var particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
  }
});

// 3D TILT EFFECT
document.querySelectorAll('.glass, .pc, .skill-card, .cert-card').forEach(function(card) {
  card.addEventListener('mousemove', function(e) {
    var rect = this.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    this.style.transform = 'perspective(1000px) rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 10) + 'deg) translateZ(10px)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});
