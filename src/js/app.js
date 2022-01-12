try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {

}
// slick js
import 'slick-carousel';



$(document).ready(function () {

    //menu
    $(".hamburger-menu").click(function (){
        $(this).toggleClass("active");
        $(".menu-list").slideToggle();
    });


    $('.logo-slider, .cars-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 200,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='assets/images/arrow-prev.png' alt='prev image' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='assets/images/arrow-next.png' alt='prev image' /></button>",
        responsive: [
            // {
            //     breakpoint: 768,
            //     settings: {
            //         arrows: false
            //     }
            // }
        ]
    });

    $('.highlight-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 200,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='assets/images/arrow-prev.png' alt='prev image' /></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='assets/images/arrow-next.png' alt='prev image' /></button>",
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

});
