$(function() {
    $('#my-menu').mmenu({
        extensions: ['theme-dark','effect-menu-slide','pagedim-black'],
        navbar: {
            title: '<img src="img/logo.png" alt="Мир Цветов">'
        },
        offCanvas:{
            position: 'right'
        }

    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function () {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });

    $('select').selectize({});

    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 1000,
        nav: false
    });

    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService()
        },100);
    });
    $('.carousel-services').owlCarousel({
        //loop: true,
        nav: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0:{
                items:1
            },
            800:{
                items:2
            },
            1100:{
                items:3
            }
        }
    });

    function onResize() {
        $('.carousel-services-content').equalHeights();
    }onResize();
    window.onresize = function () {onResize()};


    function carouselService(){
        $('.carousel-services-item').each(function() {
            var ths = $(this),
                thsh = ths.find('.carousel-services-content').outerHeight();
                ths.find('.carousel-services-image').css('min-height', thsh);
        });
    }carouselService();

    $('.carousel-services-composition .h3').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });
    $('section .h2').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });
    
});

$(document).ready(function(){
    $(".scrolling-down").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(window).on('load', function () {
    $('.preloader').delay(650).fadeOut('slow')
});


