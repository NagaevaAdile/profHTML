let burger = document.querySelector('.header__burger-btn');
let nav = document.querySelector('.header__navigation');
let esc = document.querySelector('.navigation__esc');

burger.addEventListener('click', function () {
    nav.style.display = 'block';
})

esc.addEventListener('click', function () {
    nav.style.display = 'none';
})