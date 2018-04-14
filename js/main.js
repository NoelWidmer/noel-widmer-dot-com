$(document).ready(function() {
    center_content();
    $('#centered').css('visibility', 'visible');
});

$(window).resize(function() {
    center_content();
});

function center_content() {
    var body_height = $('body').height();
    var body_width = $('body').width();
    var content_height = $('#centered').height();
    var content_width = $('#centered').width();
    var margin_top = body_height / 2 - content_height / 2;
    var margin_left = body_width / 2 - content_width / 2;
    $('#centered').css('margin-top', margin_top);
    $('#centered').css('margin-left', margin_left);
}
