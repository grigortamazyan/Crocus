const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu li');

    burger.addEventListener('click', () => {
        //Toggle New
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.2}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();