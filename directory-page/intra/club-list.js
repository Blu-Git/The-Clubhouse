const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});