$(function() {

	$(document).ready(function () {
        $('.menu-icon').click(function () {
            $('.header-menu').css('right','0px');
            function showMenu() {
                $('.header-menu').css('-webkit-clip-path','polygon(0 0,100% 0,100% 100%,0 100%)');
                $('.menu-icon').animate({right:'-100'},300);
            }
            setTimeout(showMenu,100);
        });
        $('.menu-close').click(function () {
            $('.header-menu').css('-webkit-clip-path','polygon(0 0,100% 0,100% 100%,0 100%)');
            function hideMenu() {
                $('.header-menu').css('right','-100vw');
                $('.menu-icon').animate({right:'50'},300);
            }
            setTimeout(hideMenu,100);
        });
    });

});
