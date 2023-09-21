$(document).on("click", "nav features", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 800);
});

$(document).on("click", "nav showcase", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 800);
});

$(document).on("click", "nav semplice", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 800);
});