window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (distanceFromTop > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
var menuToggle = document.getElementById('menu-icon');
var menuIcon = document.getElementById('menu-outl');
let navlist =  document.querySelector('.navigation');

menuToggle.addEventListener('click', function() {
  if (menuIcon.getAttribute('name') === 'menu-outline') {
    menuIcon.setAttribute('name', 'close-outline');
    navlist.classList.toggle('open');
  } else {
    menuIcon.setAttribute('name', 'menu-outline');
    navlist.classList.remove('open');
  }
});
  
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
})

sr.reveal('.content',{delay:200, origin:'top'});