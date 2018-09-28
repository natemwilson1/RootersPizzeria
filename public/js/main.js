
//Jquery to toggle active class

$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('a[href="'+pathname+'"]').parent().addClass('active');
})


