$(document).ready(function(){
    // slider
    $('.carousel__inner').slick({
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-right.svg"></button>',
      dots: false,
      arrows: true,
      responsive: [
        {
          breakpoint: 991.9,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          }
        },
        {
          breakpoint: 767.9,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 575.9,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
  });

  // tabs

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  
  // tabs content

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }

  toggleSlide('.catalog-item__list-link');
  toggleSlide('.catalog-item__link');
});