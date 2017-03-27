// $('button').on('mouseenter', function () {
//     $('#button-hide').addClass('moved');
// });

// $('button').on('mouseleave', function () {
//     $('#button-hide').removeClass('moved');   
// });

// When the user scrolls down,
$(window).on('scroll', function () {
	// log the distance scrolled in the console,
    var distanceScrolled = $(window).scrollTop();
    console.log('The distance scrolled is: ' + distanceScrolled);

    // if the user has gone 800px down,
    if (distanceScrolled >= 800) {
    	// animate the about section
    	$('#headshot').addClass('flipped');
    	$('.headshot-wrapper').addClass('moved');
    	$('.about').addClass('slide');
    	// replace the nav bar with home page navigation
    	// show "back to top" button
    // else,
    } else {
    	// move the elements back to their starting place,
    	$('#headshot').removeClass('flipped');
    	$('.headshot-wrapper').removeClass('moved');
    	$('.about').removeClass('slide');
    	// bring back site navigation
    	// hide "back to top" button
    }

    // if the user has gone 1600px down,
    if (distanceScrolled >= 1600) {
    	// animate the mission text,
    	$('.mission').addClass('slide');
    	$('#headshot').removeClass('flipped');
    	$('.headshot-wrapper').removeClass('moved');
    	$('.about').removeClass('slide');
    // else,
    } else {
    	// move the text box to its starting place,
    	$('.mission').removeClass('slide');
    }

    // if the user has gone 2400px down,
    if (distanceScrolled >= 2400) {
    	// animate the ratings section,
    	$('.rating').addClass('slide');
    	$('.mission').removeClass('slide');
    // else,
	} else {
    	// move the elements back to their starting place,
    	$('.rating').removeClass('slide');
	}

    // if the user has gone 3200px down,
    if (distanceScrolled >= 3200) {
    	// animate the disclaimer section,
    	$('.disclaimer').addClass('slide');
    	$('.rating').removeClass('slide');
    // else,
    } else {
    	// move the elements back to their starting place,
    	$('.disclaimer').removeClass('slide');   	
    }

});


// Do it when someone clicks a nav link
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
	














