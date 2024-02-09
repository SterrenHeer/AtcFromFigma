window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_mobile'),
    menuItem = document.querySelectorAll('.header_menu_link'),
    button = document.querySelectorAll('.btn_header'),
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
    
    button.forEach(item => {
        item.addEventListener('click', () => {
            toggler.classList.toggle('toggler_active');
            menu.classList.toggle('header_mobile_active');
        })
    })
})

$('[data-modal=consultation]').on('click', function() {
    $('#search, #thanks').fadeOut(1);
    $('.modal_back, #consultation').fadeIn('slow');
});

$('[data-modal=search]').on('click', function() {
    $('#consultation, #thanks').fadeOut(1);
    $('.modal_back, #search').fadeIn('slow');
});

$('.modal_close').on('click', function() {
    $('.modal_back, #consultation, #search, #thanks').fadeOut('slow');
});

$('form').submit(function(e) {
    e.preventDefault();
    $('#consultation').fadeOut(1);
    $('.modal_back, #thanks').fadeIn('slow');
    $('form').trigger('reset');
});
