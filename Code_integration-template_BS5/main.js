(function() {
    
  "use strict";
  
      
  /*=====================================
  Sticky pour faire en sorte que la navbar change de background au scroll de la page
  ======================================= */
  window.onscroll = function () {
      var navbar = document.getElementById("navbar");
      var nav = document.querySelector("nav");
      var sticky = navbar.offsetTop;

      if (window.pageYOffset > sticky) {
          nav.classList.add('bg-light', 'navbar-light');
          nav.classList.remove("navbar-dark");
      } else {
          nav.classList.remove("bg-light", "navbar-light");
          nav.classList.add("navbar-dark");
      }

      // show or hide the back-top-top button
      var backTo = document.querySelector("#btn-back-to-top");
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          backTo.style.display = "block";
      } else {
          backTo.style.display = "none";
      }
  };


  document.querySelectorAll(".nav-link").forEach(e =>
      e.addEventListener("click", () => {
          navbarToggler.classList.remove("active");
          navbarCollapse.classList.remove('show')
      })
  );
  
  
})();