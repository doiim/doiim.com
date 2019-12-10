// balance text on all elements with class named "balance-text"
// source: https://github.com/adobe/balance-text

// balanceText();

// fixing the 100 vh issue on mobile devices
// document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);


// all jQuery manipulation here
// $ = jQuery

$(document).ready(function () {

    $("#who").contents().hide();
    $("#who").hide();
    $("#what").contents().hide();
    $("#what").hide();

    $('#hero').hide().delay(1000).fadeIn();

    $(".who-link").click(function () {
        $("#who").show();
        $("#who").animate({
            borderWidth: '16px'
        }, 200);
        $("#who").contents().delay(300).fadeIn(200);
    });

    $(".what-link").click(function () {
        $("#what").show();
        $("#what").animate({
            borderWidth: '16px'
        }, 200);
        $("#what").contents().delay(300).fadeIn(200);
    });

    $(".nav-back").click(function () {
        $("#who").contents().fadeOut(200);
        $("#who").delay(300).animate({
            borderWidth: '0'
        }, 200);
        $("#who").fadeOut();

        $("#what").contents().fadeOut(200);
        $("#what").delay(300).animate({
            borderWidth: '0'
        }, 200);
        $("#what").fadeOut();
    });
});