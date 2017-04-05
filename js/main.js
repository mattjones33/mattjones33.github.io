// window.sessionStorage.clear();


var coinLift = "no";
var keyFound = "no";
var findColor = "red";

var kkeys = [];
var konami = "71,82,69,69,78,13";

$('.top-button').hide();
$('.modal-background').hide();


// When the user finds the key
$('#key').on('click', function () {
    $('#key').fadeOut();
    keyFound = "yes";
    // sessionStorage.setItem('keyFound', "yes");
});

// When the user finds the fake keys
$('.fake-key').on('click', function () {
    $('.fake-key').fadeOut();
    keyFound = "yes";
    
});


// When the user clicks on the keyhole
$('#keyhole').on('click', function (event) {
    event.preventDefault();
    // keyFound = sessionStorage.getItem('keyFound') || "no";

    if (keyFound === "yes") {
        $('.hidden-nav').toggleClass('hi-nav');
    } else {
        // Show modal window
        $('.modal-background').fadeIn();
    }
});

// When the user clicks on the #close button in the modal window
$('#close').on('click', function () {
    $('.modal-background').fadeOut();
    
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
        if (keyFound === "no") {
            setTimeout(function() {
                $('#key').fadeIn();
                }, 3200);
        } else {  
        }
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
	


// When the user clicks on the red item
$('#alert').on('click', function () {
    if (findColor === "red") {
        $('#alert').attr('src', 'images/icons/alert-red.svg');
        $('#art').removeClass('red');
        $('#art').addClass('orange');
        $('#home').css('background-color', 'red');
    } else {
    }

    findColor = "orange";    
});

// When the user clicks on the orange item
$('#orange-word').on('click', function () {
    if (findColor === "orange") {
        $('#orange-word').addClass('orange');
        $('#art').removeClass('orange');
        $('#art').addClass('yellow');
        $('#map-view').css('background-color', 'orange');
    } else {
    }

    findColor = "yellow";  
});

// When the user clicks on the yellow item
$('#target').on('click', function () {
    if (findColor === "yellow") {
        $('#target').attr('src', 'images/icons/aim-yellow.svg');
        $('#art').removeClass('yellow');
        $('#art').addClass('green');
        $('#list-view').css('background-color', 'yellow');
    } else {
    }

    findColor = "blue"; 
});

// When the user clicks on the green item
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if (kkeys.toString().indexOf(konami) >= 0 && findColor === "green") {
    $(document).unbind('keydown',arguments.callee);
    
    $('.green-word').css('color', 'green');
    $('#art').removeClass('green');
    $('#art').addClass('blue');
    $('#gallery').css('background-color', 'green');
    } else {

    }

    findColor = "blue";
});

// When the user clicks on the blue item
$('.lock-3').on('click', function () {
    if (findColor === "blue") {
        $('.lock-3').attr('src', 'images/icons/lock-blue.svg');
        $('#art').removeClass('blue');
        $('#art').addClass('indigo');
        $('#success').css('background-color', 'blue');
    } else {
    }

    findColor = "indigo"; 
});

// When the user clicks on the indigo item
$('#indigo-word').on('click', function () {
    if (findColor === "indigo") {
        $('#indigo-word').addClass('indigo');
        $('#art').removeClass('indigo');
        $('#art').addClass('violet');
        $('#suggestions').css('background-color', 'indigo');
    } else {
    }

    findColor = "violet";  
});

// When the user clicks on the violet item
$('#art').on('click', function () {
    if (findColor === "violet") {
        $('#art').removeClass('indigo');
        $('#art').addClass('white');
        $('#home-button').css('background-color', 'violet');
    } else {
    }

    findColor = "done";  
});
   







