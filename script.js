
const container = document.getElementById('projectsContainer');
const btnGauche = document.getElementById('slideLeft');
const btnDroit = document.getElementById('slideRight');


const scrolling = 330;


btnGauche.addEventListener('click', () => {
    
    container.scrollBy({
        left: -scrolling, 
        behavior: 'smooth'   
    });
});

 btnDroit.addEventListener('click', () => {
    container.scrollBy({
        left: scrolling,  
        behavior: 'smooth'   
    });
});

function showEmail(event) {
    
    event.preventDefault();
    
    const monEmail = "salomondeveau@yahoo.fr";
    const emailLink = document.getElementById('emailLink');
    
    emailLink.innerHTML = "📧 " + monEmail;
    
    emailLink.style.cursor = "default";
    emailLink.style.pointerEvents = "none";
}