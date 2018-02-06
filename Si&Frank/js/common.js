$(function() {

    $('#my-menu').mmenu({
        extensions: ['effect-menu-slide' , 'pagedim-black' ],
        navbar:{
            title:'<img src="img/logo-1.png" alt="logo">'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:after', function () {
        $('.hamburger').addClass('is-active');
    }).bind('close:before', function () {
        $('.hamburger').removeClass('is-active');
    });

    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed:700,
        navText: ['<i class="fa fa-angle-double-left"><i>','<i class="fa fa-angle-double-right"><i>']
        responsiveClass:true,
        responsive:{
            0: {
                items:1
            },
            800: {
                items:2
            }
            1100:{
                items:3
            }
        }
    })

});
