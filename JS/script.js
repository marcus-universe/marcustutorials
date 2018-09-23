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



$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbutton').addClass('navpadding');
        $('.Navigation').addClass('navleiste');
    } else {
        $('.navbutton').removeClass('navpadding');
        $('.Navigation').removeClass('navleiste');
    }
});

$('.navicon').click(function(){
    $(this).toggleClass('navicon_clicked');
    $('.mobileNAV').toggleClass('bfade');
});