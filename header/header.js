import './navigation.js';

window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    var distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (distanceFromTop > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});
