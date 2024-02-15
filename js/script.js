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

$('.btn_promo-search').on('click', function() {
    $('.btn_promo-search').fadeOut(1);
    $('.promo_search').fadeIn('slow');
});

$('[data-modal=consultation]').on('click', function() {
    $('#search, #thanks, #license').fadeOut(1);
    $('.modal_back, #consultation').fadeIn('slow');
});

$('[data-modal=search]').on('change', function() {
    $('#consultation, #thanks, .promo_search, #license').fadeOut(1);
    $('.modal_back, #search, .btn_promo-search').fadeIn('slow');
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

$('.licenses_item img').click(function() {
    let src = $(this).attr('src');
    console.log($('.license_zoom').attr('src'))
    $('.license_zoom').attr('src',src);
    $('#consultation, #search, #thanks').fadeOut(1);
    $('.modal_back, #license').fadeIn('slow');   
});

$('.license_zoom').on('click', function() {
    $('.modal_back, license').fadeOut('slow');
});

$("section").each(function(index) {
  $('.reviews_slider', $(this)).slick({
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('.licenses_slider', $(this)).slick({
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  $('.gallery_slider', $(this)).slick({
    autoplay: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
});
