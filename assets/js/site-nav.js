(function ($) {
	var $rootElement = $(document.documentElement),
        scrollPosition,
        escKeyCode = 27;

	var isShown = function() {
		return ( !$rootElement.hasClass('menu-shown') ) ? true : false;
	}

    //open/close site navigation
	$('.nav-toggle').on('click', function( event ){
		event.preventDefault();
		toggleNav();
	});

	// toggle navigation
	var toggleNav = function(){
		$rootElement.toggleClass('menu-shown', isShown());
	}

	// escape key pressed
	$(document).keyup(function(e) {
		if (e.keyCode === escKeyCode)  {
			toggleNav();
		}
	});

})(jQuery);
