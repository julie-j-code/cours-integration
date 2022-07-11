(function() {
    
    "use strict";
    
        
    /*=====================================
    Sticky pour faire en sorte que la navbar change de background au scroll de la page
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.getElementById("header_navbar");
        var nav = document.querySelector("nav");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            // header_navbar.classList.add("sticky");
            nav.classList.add('bg-light', 'navbar-light');
            nav.classList.remove("navbar-dark");
            // logo.setAttribute("src", "assets/images/logo-2.svg")
        } else {
            // header_navbar.classList.remove("sticky");
            nav.classList.remove("bg-light", "navbar-light");
            nav.classList.add("navbar-dark");
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "block";
        } else {
            backToTo.style.display = "none";
        }
    };

 
    document.querySelectorAll(".nav-link").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );


    
    
})();