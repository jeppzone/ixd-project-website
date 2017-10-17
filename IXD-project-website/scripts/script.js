$(document).ready(function() {
    setTimeout(function() {
             $('.arrowDownFromHeader').addClass('active');
        }, 3000);
       $('.arrowDownFromHeader').hover(

  function () {
    $('.arrowDownFromHeader').removeClass("active");
  }
);

var $w = $(window).scroll(function(){

    var showTextForConcept = $('.splitUpUnderTitleInThreeRows').offset().top;
    var top=$(this).scrollTop();
    var dif=1;
    var blackOverlayDif = 0.65;
    var elementOffset = $('.contentPage').offset().top -150,
    distance      = (elementOffset - top);

    if(top<650 && !$(".headerLogo").hasClass('.active')){
        dif-=top/650;
        blackOverlayDif +=top/$('header').height();

        if(blackOverlayDif > 0.7) {
             blackOverlayDif = 0.7;
        }

        $(".headerLogo").css({opacity:dif});
        $("#blackOverlay").css({opacity:blackOverlayDif});
        $(".headerUndertitle").css({opacity:dif});

    }
    else {
        var extraDif = -distance /100;
        $(".headerLogo").css({opacity:extraDif});
        $(".headerUndertitle").css({opacity:extraDif});
    }

    if ( $w.scrollTop() > 650) {

        $(".headerLogo").addClass('active');
        var element = $(".headerLogo").detach();
        $('.contentPage').append(element);
    }
    else{
        var element = $(".headerLogo").detach();
        $('header').append(element);
        element.insertBefore('.headerUndertitle')
        $(".headerLogo").removeClass('active');

    }

    if ( $w.scrollTop() > showTextForConcept - 450) {
       $('.imageLeftText').css({opacity:"1"});
        $('.imageRightText').css({opacity:"1"});
    }
    else {
     $('.imageLeftText').css({opacity:"0"});
        $('.imageRightText').css({opacity:"0"});
    }
});


$(".arrowDownFromHeader a").on("click", function( e ) {

        var navigation = $('.contentPage');
        $("body, html").animate({
            scrollTop:navigation.offset().top
        }, 750);
    });
});
