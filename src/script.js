window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (distanceFromTop > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  
  var menuToggle = document.getElementById('menu-bar');
  var menuIcon = document.getElementById('menu-outl');
  let navlist = document.querySelector('.navigation');
  
  menuToggle.addEventListener('click', function() {
    if (menuIcon.getAttribute('name') === 'menu-outline') {
      menuIcon.setAttribute('name', 'close-outline');
      navlist.classList.toggle('open');
      menuToggle.style.top = '3%';
      menuToggle.style.right = '20%';

    } else {
      menuIcon.setAttribute('name', 'menu-outline');
      navlist.classList.remove('open');
      menuToggle.style.top = ''; // Reset to the default position
      menuToggle.style.left = ''; // Reset to the default position
    }
  });
  
// Select the scroll-up icon link
const scrollUpLink = document.querySelector('.scroll-up');

// Add a click event listener to the link
scrollUpLink.addEventListener('click', function (event) {
  event.preventDefault();

  // Scroll to the top of the page with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



const navLinks = document.querySelectorAll('navigation a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const currentSection = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 1) - 1;

  navLinks.forEach((link) => link.classList.remove('active'));
  navLinks[currentSection].classList.add('active');
});

