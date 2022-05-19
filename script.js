let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('acitve');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('acitve');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('acitve');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('acitve');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}






























// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () => {
//     cartItem.classList.toggle('acitve');
// }