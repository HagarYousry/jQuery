/// <reference types="../@types/jquery"/>

/* start sideNav */

const sideNavwidth = $('#sideNav').outerWidth(true);

$('#sideNav')
    .animate({ left: -sideNavwidth }, 0);

// open icon 
$('.navIcon')
    .on('click', function () {
        $('#sideNav').animate({left :0 }, 1000);
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

    //! get countTo date
    let countDate = new Date(countTo);
    countDate = (futureDate.getTime() / 1000);

    //! get current date 
    let now = new Date();
    // console.log(now);
    now = (now.getTime() / 1000);

    //! get the difference between current date and countTo date by sec
    timeDifference = (futureDate - now);

    //?(24 * 60 * 60) ==> num. of sec in day ==> 86400
    let days = Math.floor(timeDifference / 86400);
    let hours = Math.floor((timeDifference - (days * 86400)) / 3600);
    let mins = Math.floor((timeDifference - (days * 86400) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * 86400) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

    //! Repeating the Countdown Every Second
    setInterval(function () {
        countDownTime(countTo);
    }, 1000);
}
//end count section

//start contact-us section
let maxLength = 100;
$('textarea').on('keyup', function () {
    //! val as getter ==> lenght
    let length = $(this).val().length;
    // console.log(length);
    let AmountLeft = maxLength - length;
    console.log(AmountLeft);
    if (AmountLeft <= 0) {
        $("#chars").text("your available characters finished");
    }
    else {
        $("#chars").text(AmountLeft);
    }
});
//end contact-us section