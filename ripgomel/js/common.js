$(function () {
    $('.carousel-tovari1').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['Предыдущая','Показать ещё'],
        responsiveClass: true,
        responsive: {
            0: {
                items:4
            }
        }
    });
    $('.carousel-tovari4').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['Предыдущая','Показать ещё'],
        responsiveClass: true,
        responsive: {
            0: {
                items:3
            }
        }
    });

});