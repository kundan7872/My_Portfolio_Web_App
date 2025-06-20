const bgAnimation = document.getElementById('bgAnimation');
const numberOfColorBoxes = 400;
for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)

}

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*===========================================*/
let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*-------------------------------------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content,.heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1,.about-img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content p,.about-content', {
    origin: 'right'
});



const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer !', 'Backend Developer !'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});