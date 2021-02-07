let burger = document.querySelector('.header__burger-btn');
let nav = document.querySelector('.header__navigation');
let esc = document.querySelector('.navigation__esc');

burger.addEventListener('click', function () {
    nav.style.display = 'block';
})

esc.addEventListener('click', function () {
    nav.style.display = 'none';
})



// let item = document.querySelectorAll('.fetured__item');
// let overWrapper = document.querySelector('.over__wrapper');

// let itemArray = Array.from(item);
// console.log(itemArray);


// for (i = 0; i < itemArray.length; i++) {
//     itemArray[i].onmouseover = function () {
//         overWrapper.style.display = 'block';
//     }

//     itemArray[i].onmouseout = function () {
//         overWrapper.style.display = 'none';
//     };
// }