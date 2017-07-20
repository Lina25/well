jQuery(document).ready(function ($) {
	//wow js init
	new WOW().init();
	
	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
	//      mobile menu
	$('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 40)
				}, 1000);
				if ($('.navbar-toggle').css('display') != 'none') {
					$(this).parents('.container').find(".navbar-toggle").trigger("click");
				}
				return false;
			}
		}
	});
	// main-menu-scroll
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var height = 300;
		if (top > height) {
			jQuery('.navbar-fixed-top').addClass('menu-scroll');
		}
		else {
			jQuery('.navbar-fixed-top').removeClass('menu-scroll');
		}
	});
	//      scroll navbar
	$('body').scrollspy({
		target: '.navbar'
		, offset: 160
	});
	
	
	
	//scrolltop animation
$(window).scroll(function () {
	if ($(this).scrollTop() > 700) {
		$('.scrollup').fadeIn('slow');
	}
	else {
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

