$.get('header.html',function(response){ 
  $('.header').html(response); 
});

$.get('footer.html',function(response){ 
  $('.footer').html(response); 
});

$('.btn_for_search').on('click', function() {
    $('.btn_for_search').fadeOut(1);
    $('.promo_search').fadeIn('slow');
});

$(document).on( "click", "[data-modal=consultation]", function() {
  $('#search, #thanks, #license').fadeOut(1);
  $('.modal_back, #consultation').fadeIn('slow');
});

$(document).on( "click", '.toggler, .header_menu_link', function() {
  $('.toggler').toggleClass('toggler_active');
  $('.header_mobile').toggleClass('header_mobile_active');
});

$('[data-modal=search]').on('change', function() {
    $('#consultation, #thanks, .promo_search, #license').fadeOut(1);
    $('.modal_back, #search, .btn_for_search').fadeIn('slow');
});

$('.modal_close').on('click', function() {
    $('.modal_back, #consultation, #search, #thanks').fadeOut('slow');
});

$('form').submit(function(e) {
    e.preventDefault();
    $('#consultation, #search, #license').fadeOut(1);
    $('.modal_back, #thanks').fadeIn('slow');
    $('form').trigger('reset');
});

$('.licenses_item img').click(function() {
    let src = $(this).attr('src');
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

$('#solutions').click(function(){
  $('#solutions_opt').slideToggle(300);  
  $('#spheres_opt').fadeOut(300);    
  return false;
});

$('#spheres').click(function(){
  $('#spheres_opt').slideToggle(300); 
  $('#solutions_opt').fadeOut(300);      
  return false;
});

$('#solutions_opt div').click(function() {
  let text = $(this).text();
  $('#solutions span').text(text);
  $('#solutions_opt').fadeOut(300); 
  $('#solutions img').toggleClass('rotate');
});

$('#spheres_opt div').click(function() {
  let text = $(this).text();
  $('#spheres span').text(text);
});

$('#solutions').click(function() {
  $('#solutions img').toggleClass('rotate');
});

$('#spheres').click(function() {
  $('#spheres img').toggleClass('rotate');
});
