/*----- MENU -----*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // alert("cliqué")
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/*----- Changement des couleurs -----*/
// les curseurs permettant de changer de taille
const sizes = document.querySelectorAll('.size_content span');
// les curseurs permettant de changer de couleur 
const colors = document.querySelectorAll('.sneaker_color');
// les 2 images de sneaker supperposées en position absolue 
const sneaker = document.querySelectorAll('.sneaker img');
// pas besoin si on peut changer dynamiquement la variable primary
// const figure = document.querySelector('#sneaker-figure');

const primary=document.body.childNodes.forEach(f=>console.log(f.classList))




// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myPrimary_get() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    // Alert the value of the --blue variable
    alert("The value of --primary is: " + rs.getPropertyValue('--primary'));
}

// Crée un setter pour changer la valeur de la variable primary. 
function myPrimary_set() {
    // Ici, l'idée c'est que tout devienne noir sans créer je ne sais combien de sélecteur inutiles, comme ce que j'ai vu en ligne...
    r.style.setProperty('--primary', 'black');
}
// Create une fonction pour revenir à la valeur initial de la variable primary
function myPrimary_reset() {
    //   Y a sûrement possibilité de revenir à l'initial (genre inherit) mais on fera avec
    r.style.setProperty('--primary', '#a29596');
}

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor() {
    // y a un problème sur les classes active des curseurs je regarderai ça plus tard
    colors.forEach(c => c.classList.toggle('active'));
    sneaker.forEach(s => s.classList.toggle('shows'));

}


sizes.forEach(size => size.addEventListener('click', changeSize));
document.querySelector("#sneaker-colors-two").addEventListener('click', myPrimary_set)
document.querySelector("#sneaker-colors-one").addEventListener('click', myPrimary_reset)
