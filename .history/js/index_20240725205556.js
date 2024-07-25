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

    //! get countTo date
    let countDate = new Date(countTo);
    countDate = (countDate.getTime() / 1000);

    //! get current date 
    let now = new Date();
    now = (now.getTime() / 1000);

    //! get the difference between current date and countTo date by sec
    timeDifference = (countDate - now);

    let totalSecondsInDay = 24 * 60 * 60;
    let totalSecondsInHour = 60 * 60;
    
    let days = Math.floor(timeDifference / totalSecondsInDay);
    let remainingTime = timeDifference % totalSecondsInDay;
    
    let hours = Math.floor(remainingTime / totalSecondsInHour);
    remainingTime %= totalSecondsInHour;
    
    let mins = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    
    console.log(`Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);
    

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

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