

//#######################################################
//SmoothWheel
//#######################################################
//$(document).ready(function () {
//    $("body").smoothWheel()
//});
//



//#############################
// Navigation Smooth Scroll
// ############################
$(function () {
    var headerHeight = $('#navbar').outerHeight();
    $('a[href*=#]').stop().click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var HASH = this.hash;
            var ZIEL = $(this.hash);
            if (ZIEL.length) {
                var ABSTAND_TOP = ZIEL.offset().top - headerHeight;
                $('html,body').animate({
                    scrollTop: ABSTAND_TOP
                }, 1000, function () {
                    window.location.hash = HASH;
                });
                return false;
            }
        }
    });
});


//#############################
// Mobile NAV
// ############################

$(document).ready(function () {
    $(".NavButton").click(function () {
        $(".navleiste").toggleClass("active")
        $(".navleiste").toggleClass("basic")
        $(".NavButton").toggleClass("navicon")
        $(".Side").toggleClass("blur")
    })
});


//#############################
// Parallax
// ############################

$(window).scroll(function () {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();

    $('.parallax08').css('top', +(wScroll * 0.8) + 'px')
    $('.parallax07').css('top', +(wScroll * -0.2) + 'px')

}

//#######################################################
//Opacity Objects
//#######################################################
