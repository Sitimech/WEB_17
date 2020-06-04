new WOW().init();


$('.team_slider').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});

$('.fade-slide').slick({
  autoplay:true,
  arrows: false,
  autoplaySpeed:1500,
  infinite: true,
  speed: 2000,
  fade: true,
  cssEase: 'linear'
});