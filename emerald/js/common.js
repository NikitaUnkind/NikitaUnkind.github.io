
	$(document).ready(function () {
        $('.menu-icon , .text-container').click(function () {
            $('.menu-icon').animate({right:'-100'},100);
            $('.text-container').animate({right:'-100'},350);
            $('.header-menu').css('-webkit-clip-path','polygon(0 0,100% 0,100% 100%,0 100%)');
            function showMenu() {
                $('.header-menu').css('right','0px');
            }
            setTimeout(showMenu,500);
        });
        $('.menu-close').click(function () {
            $('.header-menu').css('-webkit-clip-path','polygon(0 0,100% 0,100% 100%,0 100%)');
            function hideMenu() {
                $('.header-menu').css('right','-100vw');
                $('.menu-icon').animate({right:'50'},1000);
                $('.text-container').animate({right:'112'},750);
            }
            setTimeout(hideMenu,100);
        });
    });
