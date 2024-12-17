document.addEventListener('DOMContentLoaded', function() {
    const menuList = document.querySelector('.navbar__menu-ul');
    const burgerIcon = document.querySelector('.navbar__burger');
    const closeIcon = document.querySelector('.navbar__close');

    burgerIcon.addEventListener('click', function() {
        menuList.style.display = 'block'; 
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block'; 
    });

    closeIcon.addEventListener('click', function() {
        menuList.style.display = 'none'; 
        closeIcon.style.display = 'none'; 
        burgerIcon.style.display = 'block'; 
    });
});



