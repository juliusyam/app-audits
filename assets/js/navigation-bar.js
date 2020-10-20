const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const topButton = document.querySelectorAll('.nav_links li');

    
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav_active');
        //Animate top-button
        topButton.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                console.log("nav toggled");
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();