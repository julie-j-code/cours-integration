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
sr.reveal(`.container_image`, {delay:700, origin:'bottom' })
sr.reveal(`.nav_logo, .card`, {interval:100})
sr.reveal(`.logos img`, {origin:'bottom', delay:800, interval:200})
sr.reveal(`.section3 img`,{origin:'left'})
sr.reveal(`.section3 .container_data`,{origin:'right'})

/*=============== CALCULATE JS ===============*/

const calculateForm=document.querySelector("#calculate-form")
const inputHeight=document.querySelector("#calculate-cm")
const inputWeight=document.querySelector("#calculate-kg")
const calculateMessage=document.querySelector("#calculate-message")

console.log(calculateForm);

const calculateIbm=(e)=>{
    e.preventDefault()
    console.log(inputHeight.value);

// verifie si les champs sont remplis
if (inputHeight.value ==="" || inputWeight.value =="") {
    calculateMessage.style.display="block" 
    calculateMessage.classList.add("color-red")   
    calculateMessage.textContent="Tous les champs n'ont pas été remplis"
}
else{
    // se calcule en divisant le poids (en kg) par le carré de la taille (m). 
    const kg=inputWeight.value
    console.log(kg);
    const cm=inputHeight.value/100
    console.log(cm);
    const ibm=Math.round(kg/(cm*cm))
    calculateMessage.style.display="block"
    calculateMessage.classList.add("color-green")
    calculateMessage.textContent=ibm
}

}
calculateForm.addEventListener('submit', calculateIbm)




/*=============== EMAIL JS ===============*/
