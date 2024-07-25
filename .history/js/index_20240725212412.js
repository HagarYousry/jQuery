/// <reference types="../@types/jquery"/>

/* start sideNav */

const sideNavwidth = $('#sideNav').outerWidth(true);

$('#sideNav')
    .animate({ left: -sideNavwidth }, 0);

// open icon 
$('.navIcon')
    .on('click', function () {
        $('#sideNav').animate({ left: 0 }, 1000);
        $('.home-title').animate({ marginLeft: sideNavwidth }, 1000)

    })

// close icon
$('.closeIcon')
    .on('click', function () {
        $('#sideNav').animate({ left: -sideNavwidth }, 1000);
        $('.home-title').animate({ marginLeft: 0 }, 1000)
    })


//! scroll to sections
$('.sideNav-link[href^="#"]')
    .on('click', function () {
        const sectionId = $(this).attr('href');
        const sectionTop = $(sectionId).offset().top;
        $('html , body')
            .animate({ scrollTop: sectionTop }, 1000)
    })


// start Acordion section 
$('#Acordion .toggle-acordion').on('click', function () {
    $('.desc').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

//start count section
$(window).on('load', function () {
    countDownTime("27 february 2025 00:00:00");
})

function countDownTime(countTo) {

    let countDate = new Date(countTo);
    countDate = (countDate.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (countDate - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference % 3600) / 60);
    let secs = Math.floor(timeDifference % 60);


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

    setInterval(function () {
        countDownTime(countTo);
    }, 1000);
}

//start contact-us section
let maxLength = 100;
$('textarea').on('input', function () {
    let length = $(this).val().length;
    let AmountLeft = maxLength - length;
    console.log(AmountLeft);
    if (AmountLeft <= 0) {
        $("#chars").text("Your available characters are finished.");
        // Disable the textarea only if it was previously enabled
        if (!$(this).is('[disabled]')) {
            $(this).attr("disabled", "disabled");
        }
    } else {
        $("#chars").text(AmountLeft);
        // Re-enable the textarea if it's been disabled and the length is below maxLength
        if ($(this).is('[disabled]')) {
            $(this).removeAttr("disabled");
        }
    }
});
//end contact-us section