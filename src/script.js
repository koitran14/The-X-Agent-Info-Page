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
  
// Select the first-page icon link
const firstPageLink = document.querySelector('.scroll-up');

// Add a click event listener to the link
firstPageLink.addEventListener('click', function (event) {
  event.preventDefault();

  // Get the target section element
  const targetSection = document.querySelector('.intro');

  // Scroll to the target section with smooth behavior
  targetSection.scrollIntoView({
    behavior: 'smooth'
  });
});
