const burger = document.getElementById('burger');
const nav = document.querySelector('.nav_links');
const topButton = document.querySelectorAll('.nav_links li');

burger.addEventListener('click', function() {
    //Toggle Nav
    nav.classList.toggle('nav_active');
    //Animate top-button
    topButton.forEach(function(link, index) {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
});


window.onscroll = () => {
    const nav = document.querySelectorAll('.navigation nav, .nav-text img');

    for (i = 0; i < nav.length; i++) {
        if (this.scrollY <= 100) {
            nav[i].className = '';
        } else {
            nav[i].className = 'scroll';
        }
    }
};

