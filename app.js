const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
});

const menu1 = document.querySelector('#mobile-menu1')
const menuLinks1 = document.querySelector('.navbar__menu1')


menu1.addEventListener('click', function() {
    menu1.classList.toggle('is-active');
    menuLinks1.classList.toggle('active');
    
});