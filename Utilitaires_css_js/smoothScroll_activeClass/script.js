const navLinks = [...document.querySelectorAll("nav a")]
const sections = [...document.querySelectorAll("section")]

let sectionsPosition;

function positionCalculation(){
  sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation()
console.log(sectionsPosition);

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))

function addScrollSmooth(e){
  const linkIndex = navLinks.indexOf(e.target);
  console.log(navLinks[linkIndex])

  navLinks.forEach((link) => link.classList.remove('active'));
  //ajoute la classe active au lien cliqué
  navLinks[linkIndex].classList.add("active")
  
  window.scrollTo({
    top: sectionsPosition[linkIndex],
    behavior: "smooth"
  })

}

// Si accessoirement, on souhaite ajouter le classe .active au lien du menu concerné par la section qu'on scrolle
window.onscroll = () => {
	sections.forEach((section, index) => {
		//Position d'une section
    const nav          = document.querySelector('nav');
    const navPosition       = nav.getBoundingClientRect(); //Position of navBar
		const sectionPosition = section.getBoundingClientRect();
    const scrollMargin = 10; //50px - 42px navBar height +2px security 

		if (sectionPosition.top   <= navPosition.bottom + scrollMargin 
		&& sectionPosition.bottom >= navPosition.bottom) {
			//remove active class from all links
			navLinks.forEach((link) => link.classList.remove('active'));
			//ajoute la classe .active au lien correspondant à  la section scrollée
			navLinks[index].classList.add('active');
		}
	});
};


window.addEventListener("resize", positionCalculation)