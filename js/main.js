var animating = false;

$(document).ready(function(){
	$("a").on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			var offsetMenu = (hash != "#home") ? $(hash).offset().top - 140 : 0;

			animating = true;

			$('html,body').animate({
				scrollTop: offsetMenu
			}, 1200, function(){animating=false;$(window).scroll()});
		}
	});
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var musicTop = $('#music').offset().top - 190;
	var aboutTop = $('#about').offset().top - 350;
	var atBottom = ($(window).scrollTop() + $(window).height() == $(document).height());

	if(!animating){
		if (scroll < musicTop && !atBottom) {
			$('#home-link').addClass('selected');
			$('#music-link').removeClass('selected');
			$('#about-link').removeClass('selected');
		} 
		else if (scroll >= musicTop && scroll < aboutTop && !atBottom) {
			$('#home-link').removeClass('selected');
			$('#music-link').addClass('selected');
			$('#about-link').removeClass('selected');
		}
		else if (scroll >= aboutTop || atBottom) {
			$('#home-link').removeClass('selected');
			$('#music-link').removeClass('selected');
			$('#about-link').addClass('selected');
		}
		else {
			$('#home-link').addClass('selected');
			$('#music-link').removeClass('selected');
			$('#about-link').removeClass('selected');
		}
	}
});