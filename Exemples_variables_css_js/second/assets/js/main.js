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

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}
sizes.forEach(size => size.addEventListener('click', changeSize));

