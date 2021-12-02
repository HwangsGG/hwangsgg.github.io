//Slider
$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1200,
      adaptiveHeight: true,
      infinite: true,
      autoplaySpeed: 1100,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left-arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/right-arrow.png"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
          autoWidth: true,
          // dots: true,
          arrows: false,
          }
        }
      ]
  });

//Tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });   

//Catalog
  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item_back');

//Modal
$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks , #order').fadeOut('slow');
});

$('.button_catalog').each(function(i) {
  $(this).on('click', function() {
    $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
    $('.overlay, #order').fadeIn('slow');
  })
})
//Validate forms
function valideForms (form) {
  $(form).validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: "Пожалуйста введите своё имя",
      phone: "Пожалуйста введите номер телефона",
      email: {
        required: "Пожалуйста введите свой E-mail",
        email: "E-mail адрес указан неверно"
      }
    }
  });
}
valideForms('#consultation form');
valideForms('#consultation-form');
valideForms('#order form');

//Phone mask
$('input[name=phone]').mask("+38 (099) 999-99-99");
});
