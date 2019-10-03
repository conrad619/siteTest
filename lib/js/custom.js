
$(document).ready(function(){

	new WOW().init();

	

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50 ) {
			$('.to-top:hidden').stop(true, true).fadeIn();
		} else {
			$('.to-top').stop(true, true).fadeOut();
		}
	});
	$(function(){$(".to-top").click(function(){$("html,body").animate({scrollTop:0},"1000");return false})})

});