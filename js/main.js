// window.sessionStorage.clear();


var coinLift = "no";
// var keyFound = "no";

$('.top-button').hide();


// When the user finds the key
$('#key').on('click', function () {
    // Type code related to event here! :)
    $('#key').fadeOut();
    // keyFound = "yes";
    sessionStorage.setItem('keyFound', "yes");
});


// When the user clicks on the keyhole
$('#keyhole').on('click', function (event) {
    event.preventDefault();
    keyFound = sessionStorage.getItem('keyFound') || "no";
    if (keyFound === "yes") {
        $('.hidden-nav').toggleClass('hi-nav');
    } else {
        // Show modal window
    }
    
    
});

// When the user scrolls down,
$(window).on('scroll', function () {
	// log the distance scrolled in the console,
    var distanceScrolled = $(window).scrollTop();
    console.log('The distance scrolled is: ' + distanceScrolled);

    if (distanceScrolled >= 800) {
        // show "back to top" button
        $('.top-button').fadeIn();
    } else {
        $('.top-button').hide();
    }


    // if the user has gone 800px down,
    if (distanceScrolled >= 800 && distanceScrolled <= 1200) {
    	// animate the about section
    	$('#headshot').addClass('flipped');
    	$('.headshot-wrapper').addClass('moved');
    	$('.about').addClass('slide');
    	// replace the nav bar with home page navigation
        $('nav a').addClass('bye-nav')


        setTimeout(function() {
            $('.headshot-wrapper').removeClass('stage-one');
            $('.headshot-wrapper').addClass('stage-two');
        }, 4000);
        setTimeout(function() {
            $('#key').fadeIn();
        }, 3200);
    } else {
        $('.headshot-wrapper').removeClass('stage-two');
        $('.headshot-wrapper').addClass('stage-one');
    	$('#headshot').removeClass('flipped');
    	$('.headshot-wrapper').removeClass('moved');
        $('.headshot-wrapper').removeClass('lifted');
    	$('.about').removeClass('slide');
        $('#key').fadeOut();
    	// bring back site navigation
    	// hide "back to top" button
    }

    // if the user has gone 1600px down,
    if (distanceScrolled >= 1600 && distanceScrolled <= 2000) {
    	// animate the mission text,
    	$('.mission').addClass('slide');

    // else,
    } else {
    	// move the text box to its starting place,
    	$('.mission').removeClass('slide');
    }

    // if the user has gone 2400px down,
    if (distanceScrolled >= 2400 && distanceScrolled <= 2800) {
    	// animate the ratings section,
    	$('.rating').addClass('slide');
    	$('.mission').removeClass('slide');
        $('.lock, .key-points').addClass('rated');
    // else,
	} else {
    	// move the elements back to their starting place,
    	$('.rating').removeClass('slide');
        $('.lock, .key-points').removeClass('rated');
	}

    // if the user has gone 3200px down,
    if (distanceScrolled >= 3200 && distanceScrolled <= 3600) {
    	// animate the disclaimer section,
    	$('.disclaimer').addClass('slide');
    	$('.rating').removeClass('slide');
    // else,
    } else {
    	// move the elements back to their starting place,
    	$('.disclaimer').removeClass('slide');   	
    }

});

// When the user clicks on the headshot
$('#headshot').on('click', function () {
    if (coinLift === "no") {
        $('.headshot-wrapper').addClass('lifted');
        coinLift = "yes"
        console.log(coinLift)
    } else {
        $('.headshot-wrapper').removeClass('lifted');
        coinLift = "no"
        console.log(coinLift)
    }

});




// When the user clicks on the navigation arrows
$('.arrow-wrapper a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset
  }, 600);
});
	











