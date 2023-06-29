  var menuToggle = document.getElementById('menu-open');
  let navlist = document.querySelector('.navigation');
  var closeToggle = document.getElementById('close-outl');

  menuToggle.addEventListener('click', () => {
    if (!navlist.classList.contains('open')) {
      menuToggle.classList.add('active');
      navlist.classList.add('open');
    } 
  });

  closeToggle.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navlist.classList.remove('open');

  });