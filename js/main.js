$('button').on('mouseenter', function () {
    $('#button-hide').addClass('moved');
});

$('button').on('mouseleave', function () {
    $('#button-hide').removeClass('moved');   
});

$(window).on('scroll', function () {
    var distanceScrolled = $(window).scrollTop();
    console.log('The distance scrolled is: ' + distanceScrolled);

    if (distanceScrolled >= 1150) {
    	$('.lock').addClass('rated');
    } else {
    	$('.lock').removeClass('rated');
    }
});