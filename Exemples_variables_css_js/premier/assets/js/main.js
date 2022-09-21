/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      console.log(navMenu);

/*===== MENU SHOW =====*/
/* on s'assure que la constante existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        alert("burger")
        navMenu.style.right="0"
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
/* on s'assure que la constante existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.style.right="-100%"
    })
}


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Quand la poisition du scroll dépasse de 50 la hauteur du viewport, on ajoute la classe .scroll-header à l'élément header
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp=()=>{
    const scrollUp=document.querySelector('#scroll-up')
    this.scrollY>=350?scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr=ScrollReveal(
{    origin:'top',
    distance: '400px',
    duration: 3500,
    delay:400}
)

sr.reveal(`.home .container_data`)
sr.reveal(`.container_image`, {delay:700,origin:'bottom' })
sr.reveal(`.nav_logo`, {delay:100})
sr.reveal(`.logos img`, {origin:'bottom', delay:800, interval:600})
sr.reveal(`.section3 img`,{origin:'left'})
sr.reveal(`.section3 .container_data`,{origin:'right'})

/*=============== CALCULATE JS ===============*/


/*=============== EMAIL JS ===============*/
