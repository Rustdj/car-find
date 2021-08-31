
$(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
        $('.market__sidenav').fadeIn();
    } else {
        $('.market__sidenav').fadeOut();
    }
});