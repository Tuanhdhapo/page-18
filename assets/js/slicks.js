$('.slick').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-angle-left prev"></i></button>',
  nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-angle-right next"></i></button>',
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  ]
});
