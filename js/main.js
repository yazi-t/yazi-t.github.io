jQuery(document).ready(function($) {

	'use strict';

	/************** Mixitup (Filter Projects) *********************/
    	$('.projects-holder').mixitup({
            effects: ['fade','grayscale'],
            easing: 'snap',
            transitionSpeed: 400
        });
		
		$("#form-submit").click(function(){
			window.open('mailto:' + document.getElementById("email").value 
			+ '?subject=Github visitor - ' + document.getElementById("name").value 
			+ '&body=' + document.getElementById("message").value + '');
		});
		
		var dt = new Date();
		var yr = dt.getFullYear();
		
		var i = 1995;
		$('#cp-year').html(i);
		
		var scrolledBottom = false;
		$(window).scroll(function (event) {
			var scroll = $(window).scrollTop();
			if (!scrolledBottom && scroll > position) {
				incrementYear();
				scrolledBottom = true;
			}
		});
		
		function incrementYear() {
			i++;
			$('#cp-year').html(i);
			console.log("val: " + i);
			if (i < yr) {
				setTimeout(function() {
					incrementYear();
				}, 50);
			}
		}

});