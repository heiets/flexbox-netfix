// JQUERY version
$( ".lang__current" ).click(function() {
    $( ".header__lang ul" ).toggleClass( "lang__show" );
});
$( ".services__current" ).click(function() {
    $( ".services__list ul" ).toggleClass( "services__show" );
    $( ".services__current .dropdown" ).toggleClass( "dropdown-open" );
});
$( ".assignments__current" ).click(function() {
    $( ".assignments__list ul" ).toggleClass( "assignments__show" );
    $( ".assignments__current .dropdown" ).toggleClass( "dropdown-open" );
});
$( ".academic__current" ).click(function() {
    $( ".academic__list ul" ).toggleClass( "academic__show" );
    $( ".academic__current .dropdown" ).toggleClass( "dropdown-open" );
});
$( ".urgency__current" ).click(function() {
    $( ".urgency__list ul" ).toggleClass( "urgency__show" );
    $( ".urgency__current .dropdown" ).toggleClass( "dropdown-open" );
});
$( ".less" ).click(function() {
    $( ".pagesNumberVal" ).val() > 0 ? $( ".pagesNumberVal" ).val(+$( ".pagesNumberVal" ).val()-1) : false;
});
$( ".more" ).click(function() {
    $( ".pagesNumberVal" ).val(+$( ".pagesNumberVal" ).val()+1);
});
$( ".header__lang ul li" ).click(function(e) {
    e.preventDefault();
    $( ".lang__current" ).html(this.querySelector('a').innerHTML+'<div class="dropdown">></div>');
    $( ".header__lang ul" ).toggleClass( "lang__show" );
});
$( ".services__list ul li" ).click(function(e) {
    e.preventDefault();
    $( ".services__current" ).html(this.querySelector('a').innerHTML+'<div class="dropdown"></div>');
    $( ".services__list ul" ).toggleClass( "services__show" );
});
$( ".disc__hide" ).click(function(e) {
    e.preventDefault();
    $( ".disc" ).addClass( "d__hide" );
});
$(".arrow").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
$( ".disc__wrap a" ).click(function(e) {
    e.preventDefault();
    $( ".disc__open" ).toggleClass( "d__hide" );
    $( ".disc__wrap" ).toggleClass( "d__hide" );
});
$( ".assignments__list ul li" ).click(function(e) {
    e.preventDefault();
    $( ".assignments__current" ).html(this.querySelector('a').innerHTML+'<div class="dropdown"></div>');
    $( ".assignments__list ul" ).toggleClass( "assignments__show" );
});
$( ".academic__list ul li" ).click(function(e) {
    e.preventDefault();
    $( ".academic__current" ).html(this.querySelector('a').innerHTML+'<div class="dropdown"></div>');
    $( ".academic__list ul" ).toggleClass( "academic__show" );
});
$( ".urgency__list ul li" ).click(function(e) {
    e.preventDefault();
    $( ".urgency__current" ).html(this.querySelector('a').innerHTML+'<div class="dropdown"></div>');
    $( ".urgency__list ul" ).toggleClass( "urgency__show" );
});
$(document).ready(function(){
    $('.slider__wrap').slick({
        dots: true,
        infinite: true,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.section-2__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
// NATIVE version
var menu = document.querySelector('.show__menu');
var langList = document.querySelectorAll('.header__lang ul li');
var lang__current = document.querySelector('.lang__current');
function noClick(e) {
    e.preventDefault();
    return false;
}
function showMenu(e) {
    var menuMobile = document.querySelector('.menu__mobile');
    var menuButton = document.querySelector('.show__menu');
    if (menuButton.getAttribute('class') == 'show__menu hide') {
        menuMobile.setAttribute('class','menu__mobile menu__mobile__show');
        menuButton.setAttribute('class','show__menu menu__active');
    }
    else {
        menuMobile.setAttribute('class','menu__mobile menu__mobile__hide');
        menuButton.setAttribute('class','show__menu hide');
    }
    e.preventDefault();
    return false;
}
(function () {
    menu.addEventListener("click", showMenu, false);
})();