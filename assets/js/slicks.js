$('.slick').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-angle-left prev"></i>',
    nextArrow: '<i class="fas fa-angle-right next"></i>',
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    ]
});
