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
    let num = 0;
    mobileNav.style.opacity = num.toFixed(1);
    setInterval (function(){
      if (num <= 0.9) {
          num += 0.1;
          mobileNav.style.opacity = num.toFixed(1);
      }
    }, 30);
  } else {
    hamburgerImage.src = menuIcon;
  }
});
