jQuery(document).ready(function ($) {
	//wow js init
	new WOW().init();

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
	
	// main-menu-scroll
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var height = 300;
		if (top > height) {
			jQuery('.navbar-fixed-top').addClass('menu-scroll');
		} else {
			jQuery('.navbar-fixed-top').removeClass('menu-scroll');
		}
	});
	//      scroll navbar
	$('body').scrollspy({
		target: '.navbar',
		offset: 160
	});



	//scrolltop animation
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$('.scrollup').fadeIn('slow');
		} else {
			$('.scrollup').css('display', 'none')
		}
	});
	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});


});