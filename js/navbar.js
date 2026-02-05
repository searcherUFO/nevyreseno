// let header = document.getElementById('header');

//       console.log(header);


document.addEventListener("DOMContentLoaded", function () {
    function handleScroll() {
      const header = document.getElementById('header');
      const navIconScroll = document.querySelector(".nav-btn-3")

      console.log(navIconScroll);
      

    //   let navOpenIcon  = document.querySelector("#navIconScroll")
      var navbarHeight = header.offsetHeight;
  
      if (window.scrollY > 25) {
        header.classList.add('fixed-top', 'fade-in');
        navIconScroll.style.top = "2pc"
        // navOpenIcon.classList.add('nav-open-icon-scroll')
        // document.body.style.paddingTop = navbarHeight + 'px';
        console.log("scrolled");
      } else {
        header.classList.remove('fixed-top', 'fade-in');
        // navOpenIcon.classList.remove('nav-open-icon-scroll')
        navIconScroll.style.top = "4.5pc"
        document.body.style.paddingTop = '0';
        console.log("not scrolled");
        
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
  