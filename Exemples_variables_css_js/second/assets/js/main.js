/*----- MENU -----*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // alert("cliqué")
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*----- Changement des couleurs -----*/
const sizes = document.querySelectorAll('.size_content span');
const colors = document.querySelectorAll('.sneaker_color');
const sneaker = document.querySelectorAll('.sneaker img');

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor(){
    colors.forEach(c => c.classList.toggle('active'));
    sneaker.forEach(s => s.classList.toggle('shows'));

}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));
