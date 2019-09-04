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

    // point to correct login in staging hack
    if (window.location.host.match(/staging/)) {
        $(".js-login-link-workshop").prop("href", "https://workshop.staging.connectedcars.io/");
        $(".js-login-link-fleet").prop("href", "https://fleet.staging.connectedcars.io/");
    }

})(jQuery);
//# sourceMappingURL=/assets/source-maps/site-nav.js.map
//# sourceURL=assets/js/site-nav.js
