
// Declare var and selects first element matching the css selector
const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

// addEventListener sets up a function to be called if clicked
// Function shorthand
menu.addEventListener('click', () => {
    // classList returns DOMTokenList (set of space-separated tokens/symbols)
    // and modified via the toggle method (removes token from list/set) returns false
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    // after event (click), menu icon becomes active class
});

document.addEventListener('scroll', () => {
    // Changes the navigation background to red after exiting hero section
    // window.scrollY = gets y-axis value relative to scroll on page
    let scrollPosition = window.scrollY;
    if (scrollPosition > 600) {
        header.style.backgroundColor = 'rgb(218, 41, 28, .9)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});