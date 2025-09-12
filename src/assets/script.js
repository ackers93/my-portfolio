// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('nav__toggle--open');
      navMenu.classList.toggle('nav__menu--open');
    });
  }
  
  // Close mobile menu when clicking on links
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('nav__toggle--open');
      navMenu.classList.remove('nav__menu--open');
    });
  });
}); 