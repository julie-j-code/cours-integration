window.onload = () => {

    // on crée l'observeur
    const observer = new IntersectionObserver(observables => {
        console.log(observables);
        for (let observable of observables) {
            // si on s'en tient à 0.5 quand la section sera scrollée à hauteur de moitiée, elle deviendra visible
            if (observable.intersectionRatio > 0.7) {
                // attention, c'est mortel ! on vise .target de l'observable
                observable.target.classList.remove("hidden")
            } else {
                observable.target.classList.add("hidden")
            }
        }
    }, {
        // threshold: [0.5]
        threshold: [0.25, 0.75]
    });

    // on récupère les sections
    const sections = document.querySelectorAll("main > section");
    console.log(sections);
    for (let section of sections) {
        // section.classList.add("hidden");
        // on précise que ce sont les sections qu'on souhaite observer !
        observer.observe(section)
    }

}