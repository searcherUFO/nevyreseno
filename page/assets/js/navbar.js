// -----------------------------------nav bar fixed when scroll--------------------------------//

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener('scroll', function () {
//     var header = document.getElementById('header');
//     var navbarHeight = header.offsetHeight;

//     if (window.scrollY > 20) {
//       header.classList.add('fixed-top', 'fade-in');
//       document.body.style.paddingTop = navbarHeight + 'px';
//     } else {
//       header.classList.remove('fixed-top', 'fade-in');
//       document.body.style.paddingTop = '0';
//     }
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  function handleScroll() {
    var header = document.getElementById('header');
    let navOpenIcon = document.querySelector("#navIconScroll")
    var navbarHeight = header.offsetHeight;

    if (window.scrollY > 25) {
      header.classList.add('fixed-top', 'fade-in');
      navOpenIcon.classList.add('nav-open-icon-scroll')
      document.body.style.paddingTop = navbarHeight + 'px';
      console.log("scrolled");
    } else {
      header.classList.remove('fixed-top', 'fade-in');
      navOpenIcon.classList.remove('nav-open-icon-scroll')
      document.body.style.paddingTop = '0';
    }
  }

  function isMobileView() {
    return window.innerWidth <= 768; // Adjust the width threshold as needed
  }

  function checkAndHandleScroll() {
    if (isMobileView()) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
      var header = document.getElementById('header');
      header.classList.remove('fixed-top', 'fade-in');
      document.body.style.paddingTop = '0';
    }
  }

  window.addEventListener('resize', checkAndHandleScroll);
  checkAndHandleScroll(); // Run on initial load
});


// -----------------------------------nav bar fixed when scroll--------------------------------//




/*** ==========================Mobile nav toggle========================== */
document.addEventListener('DOMContentLoaded', () => {
  "use strict";



  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#mobile-navbar a, .main-navigation a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('body').classList.contains('mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        // event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });



});







const mobileViewThreshold = 768;

if (window.innerWidth <= mobileViewThreshold) {

  let dropDownIcon = document.querySelector("#product-dropdown");
  let productDropdown = document.querySelector("#product-mobile-dropdown");

  if (productDropdown && dropDownIcon) {
    productDropdown.style.display = 'none';

    dropDownIcon.addEventListener('click', (e) => {
      e.preventDefault();
      if (!productDropdown.style.display || productDropdown.style.display === 'none') {
        productDropdown.style.display = 'block';
      } else {
        productDropdown.style.display = 'none';
      }
      console.log("hello");
    });


    console.log("mobile-nav");

  }
}