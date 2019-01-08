// ###################################
// LOTTIE ANIMATION
// ################################### 

lottie.loadAnimation({
    container: document.getElementById('DESK'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'JSON/DeskAnimation.json'
});

lottie.loadAnimation({
    container: document.getElementById('BGDesk'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'JSON/BGDesk.json'
});


// ###################################
// NAV SCROLL Function
// ###################################

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbutton').addClass('navpadding');
        $('.Navigation').addClass('navleiste');
    } else {
        $('.navbutton').removeClass('navpadding');
        $('.Navigation').removeClass('navleiste');
    }
});

$('.navicon').click(function () {
    $(this).toggleClass('navicon_clicked');
    $('.mobileNAV').toggleClass('bfade');
});



// ###################################
// SELECT Function
// ###################################

$(document).ready(function () {

    $('.filter').on('change', function () {
        var select = $(this).val();

        $('.imageboxes').removeClass('FadeIn').addClass('FadeOut');

        setTimeout(function () {
            $('.imageboxes').each(function () {
                if (!($(this).hasClass(select))) {
                    $(this).addClass('none');
                }
            });
        }, 510);

        setTimeout(function () {
            $('.imageboxes').each(function () {
                if ($(this).hasClass(select)) {
                    $(this).removeClass('none');
                }
            });
        }, 520);

        setTimeout(function () {
            $('.imageboxes').each(function () {
                if ($(this).hasClass(select)) {
                    $(this).removeClass('FadeOut').addClass('FadeIn');
                }
            });
        }, 550);

    });
});

lightbox.option({
    'resizeDuration': 100,
    'fadeDuration': 100,
    'wrapAround': true,
    'disableScrolling': false,
    'maxWidth': 1920,
    'maxHeight': 1080,
    //'positionFromTop': 0,
    'fitImagesInViewport': true,
    'imageFadeDuration': 50

})
