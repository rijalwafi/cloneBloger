$(document).ready(function () {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  //   click Event on toggle collapse
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse');
  });

  //OwL-carousel
  const responsive = {
    0: {
      items: 1,
    },
    320: {
      items: 1,
    },
    560: {
      items: 2,
    },
    960: {
      items: 3,
    },
  };
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    nav: true,
    navText: [
      $('.owl-navigation .owl-nav-prev'),
      $('.owl-navigation .owl-nav-next'),
    ],
    responsive: responsive,
  });

  //click to scroll top
  $('.move-up span').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //change header on scroll
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.nav').addClass('nav-on-scroll');
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $('.nav').removeClass('nav-on-scroll');
    }
  });

  //Animation on Scroll
  AOS.init();
});
