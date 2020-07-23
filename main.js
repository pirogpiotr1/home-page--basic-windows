$(document).ready(function () {
    $('.icon').off('click').on('click', function () {
        $(this).toggleClass('minus', 'plus');
        $(this).parent().next().stop().slideToggle('fast');
    });
})