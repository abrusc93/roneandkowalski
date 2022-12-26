$(window).scroll(function() {
    if ($(window).scrollTop()<=50 && $(window).width()>768) {
      $('#navbar').css('background', 'transparent');
    } else {
      $('#navbar').css('background', 'rgb(62, 98, 147)');
    }
});

$('.navbar-nav>.section-link>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

var pathname = window.location.pathname;
if(pathname=="/index.html"){
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
}

else if(pathname=="/contact.html"){
    $(window).resize(function(){
        if($(window).width()<1126){
        $('#staff-contacts-container').removeClass('w-75');
        $('#right-container').removeClass('w-50');
        $('#right-container').addClass('mx-auto');
        }
        if($(window).width()>1126){
            $('#staff-contacts-container').addClass('w-75');
            $('#right-container').removeClass('mx-auto');
            $('#right-container').addClass('w-50');
        }
        if($(window).width()<487){
            $('#office-hours-mobile').removeClass('w-50');
        }
        if($(window).width()>487){
            $('#office-hours-mobile').addClass('w-50');
        }
    });

    if($(window).width()<1126){
        $('#staff-contacts-container').removeClass('w-75');
        $('#right-container').removeClass('w-50');
        $('#right-container').addClass('mx-auto');
    }
    if($(window).width()>1126){
        $('#staff-contacts-container').addClass('w-75');
        $('#right-container').removeClass('mx-auto');
        $('#right-container').addClass('w-50');
    }
    if($(window).width()<487){
        $('#office-hours-mobile').removeClass('w-50');
    }
    if($(window).width()>487){
        $('#office-hours-mobile').addClass('w-50');
    }
}

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,10); // First ten digits of input only
    const areaCode = input.substring(0,3);
    const middle = input.substring(3,6);
    const last = input.substring(6,10);

    if(input.length > 6){event.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(input.length > 3){event.target.value = `(${areaCode}) ${middle}`;}
    else if(input.length > 0){event.target.value = `(${areaCode}`;}
};

const inputElement = document.getElementById('phone');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);