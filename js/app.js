let menuIcon = document.getElementById('menu-icon');
let mobileMenu = document.getElementById('mobile-menu');
let pos = 0;
menuIcon.addEventListener('click', () => {
    if(pos === 0) {
        mobileMenu.style.left = '0';
        pos = 1;
    } else {
        mobileMenu.style.left = '-100%';
        pos = 0;
    }
});