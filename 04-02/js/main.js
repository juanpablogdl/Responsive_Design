$(document).ready(function() {
    $('.lugares a').on('touchstart touchend', function() {
        $(this).toggleClass('activo');
    });
});