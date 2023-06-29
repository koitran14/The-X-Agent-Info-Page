import './section2/slider-effect.js';
import './header/header.js';

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

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
})

sr.reveal('.content',{delay:200, origin:'top'});
sr.reveal('.slider-content',{delay:200, origin:'top'});
sr.reveal('.timeline',{delay:200, origin:'top'});




