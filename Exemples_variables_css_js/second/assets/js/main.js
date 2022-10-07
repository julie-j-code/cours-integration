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

