$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.menu__icon').toggleClass(' icon-active');
        $('.menu__body').toggleClass(' menu__body-active');
    });
});
$('.menu__link').click(function (event) {
    $('.menu__body').toggleClass(' menu__body-active');
    $('.menu__icon').toggleClass(' icon-active');
});
$('.user__img').click(function (event) {
    $('.user__menu').toggleClass(' menu-active');
});
document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.header__actions')) {
        let user_menu = document.querySelector('.user__menu');
        user_menu.classList.remove('menu-active');
    }
});
$(document).ready(function () {
    $('.main-slider__item').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false,
        prevArrow: $('.control-main-slider__arrow-prev'),
        nextArrow: $('.control-main-slider__arrow-next')
    });
});
$(document).ready(function () {
    $('.slider-lots__body').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        draggable: false,
        slidesToShow: 3,
        prevArrow: $('.control-slider-lots__arrow'),
        nextArrow: $('.control-slider-lots__arrow2'),
        responsive: [
            {
                breakpoint: 1060,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 865,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.slider-quotes__body').slick({
        arrows: true,
        draggable: false,
        nextArrow: $('.control-slider-quotes__circle'),
        prevArrow: null,
        adaptiveHeight: true
    });
});
$(function () {
    $('.menu__link, .footer__link, .item-main-slider__btn, .footer__logo, .heder__logo').on('click', function (event) {
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({ scrollTop: dn }, 1000);
    });
});
