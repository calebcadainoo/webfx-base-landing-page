// get hamburger menu
const hamburger = document.querySelector('.mobile-hamburger');
const mobileNav = document.querySelector('.navigation-menu');

// hamburger menu icon
const hamburgerImage = document.querySelector('.mobile-hamburger img');
let menuIcon = 'images/icon-hamburger.svg';
let closeIcon = 'images/icon-close.svg';

hamburger.addEventListener('click', function() {
  mobileNav.classList.toggle('open-menu');
  
  if (mobileNav.classList.contains('open-menu')) {
    hamburgerImage.src = closeIcon;
  } else {
    hamburgerImage.src = menuIcon;
  }
});
