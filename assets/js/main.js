function windowSize() {
	windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
	windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
}


(function($) {
	$(document).ready(function() {

		var	$window = $(window),
			$header = $('#header'),
			$content = $('#header'),
			$footer = $('#footer');


		// On load, check the size of the screen or window
		windowSize();
		if (windowWidth < 768) {		// if a small screen
			$("#overlay_menu").hide();	// hide the overlay menu at first
		}

		// Events.
			// ================================================================
			// Slide down navigation menu
			// ================================================================
			$("#menu_icon").click(function(){
				$("#overlay_menu").slideToggle("slow"); 
			});
			

			// Catch subsequent resizing events
			$(window).resize(function() {
				windowSize();
				if (windowWidth >= 768) {
					$("#overlay_menu").show(); // always show on larger screens
				}
			});

			// ================================================================
			// Scroll effect
			// ================================================================
			// Bind to the click of all links with a #hash in the href
			$('a[href^="#"]').click(function(e) {
				// Prevent the jump and the #hash from appearing on the address bar
				e.preventDefault();
				// Scroll the window, stop any previous animation, stop on user manual scroll
				// Check https://github.com/flesler/jquery.scrollTo for more customizability
				$(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true, offset:{top:-$header.outerHeight()}});
			});
	});

})(jQuery);

