/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/

// JS EXAMPLE

var Base = Base || {};

// Parallax actions
Base.ParallaxFunction = function() {
	
	// Declare window inside a variable
	var $window = $(window);

	// Call functions
	function init() {
	
		// Reuseable functions activates each parallax section
		//
		// Call parallaxIt passing two variables
		// parallaxIt(CONTAINER, CONTAINER PARALLAX IMG );
		// eg parallaxIt($(.container).scrollTop(), $(.container img));
		// The .scrollTop() calculates from the top of the page.
		// We also subtract how far we are from the top of the page 
		// from how far the element is from the top of the page
		// parallaxIt($(.container).offset().top - $window.scrollTop(), $(.container img));
		$window.scroll(function(e) {
		
			parallaxIt($('.img-section-zero').offset().top - $window.scrollTop(), $('.img-zero'));
		    parallaxIt($('.img-section-one').offset().top - $window.scrollTop(), $('.img-one'));
		    parallaxIt($('.img-section-two').offset().top - $window.scrollTop(), $('.img-two'));
		    parallaxIt($('.img-section-three').offset().top - $window.scrollTop(), $('.img-three'));
		    parallaxIt($('.img-section-four').offset().top - $window.scrollTop(), $('.img-four'));
		    
		});
		
	}

	function parallaxIt(containerElement, imgName) {
	
		var scrolled = containerElement;
		imgName.css('top', -(scrolled * 0.5) + 'px');
		
	}

	init();
	
};

// ON DOC READY
$(function()
{	
	new Base.ParallaxFunction();
	
});

