$(window).scroll(function() {
    if ($(window).scrollTop()<=50 && $(window).width()>995) {
      $('.navbar').css('background', 'transparent');
    } else {
      $('.navbar').css('background', 'rgb(62, 98, 147)');
    }
});

$('.navbar-nav>.section-link>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(window).resize(function(){
    if($(window).width()<995){
     $('.form-container').removeClass('w-50');
    }
    if($(window).width()>995){
        $('.form-container').addClass('w-50');
    }
});

if($(window).width()<995){
    $('.form-container').removeClass('w-50');
}
if($(window).width()>995){
    $('.form-container').addClass('w-50');
}

ScrollReveal().reveal('.reveal', { 
    delay: 200
});

ScrollReveal().reveal('.reveal-delay', { 
    delay: 600
});

ScrollReveal().reveal('.reveal-slow', { 
    delay: 300,
    duration: 3000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.reveal-up', { 
    delay: 200,
    distance: '30px'
});

$('.menu-page *').addClass('animate__animated animate__fadeIn');