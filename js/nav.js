const navItem = document.querySelector('.nav');
const hamburgerMenu = document.querySelector('.hamburger');

hamburgerMenu.addEventListener('click', () => {
    navItem.classList.toggle("navopen");
});