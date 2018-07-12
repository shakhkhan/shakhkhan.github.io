$(function(){
    $(window).on("load resize", function(){
        $(".fill-screen").css("height", window.innerHeight);
    });
    // Scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset:150
    });
    // animate-scroll
    $('nav a').bind('click', function(){
        $($(this).attr('href')).animatescroll({scrollSpeed:3000, padding:50 });
        event.preventDefault();
    });
    $('.down-button a').bind('click', function(){
        $($(this).attr('href')).animatescroll({scrollSpeed:3000, padding:50 });
        event.preventDefault();
    });
    $('.progress-bar').each(function() {
     var bar_value = $(this).attr('aria-valuenow') +'%';
     $(this).animate({width: bar_value}, { duration: 2000, ease: 'easeOutCirc'});
    });

})