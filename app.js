
// Declare var and selects first element matching the css selector
const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

// Sets up a function to be called if clicked
// Function shorthand
menu.addEventListener('click', () => {
    // classList returns DOMTokenList (set of space-separated tokens/symbols)
    // and modified via the toggle method (removes token from list/set) returns false
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    // after event (click), menu icon becomes active class
});