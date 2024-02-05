window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_mobile'),
    menuItem = document.querySelectorAll('.header_menu_link'),
    toggler = document.querySelector('.toggler');

    toggler.addEventListener('click', () => {
        toggler.classList.toggle('toggler_active');
        menu.classList.toggle('header_mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            toggler.classList.toggle('toggler_active');
            menu.classList.toggle('header_mobile_active');
        })
    })
})
