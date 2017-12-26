$(document).ready(function(){
	$("a").on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			console.log(hash)
			var offsetMenu = (hash != "#home") ? $(hash).offset().top - 140 : 0;

			$('html,body').animate({
				scrollTop: offsetMenu
			}, 1200);
		}
	});
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var musicTop = $('#music').offset().top - 190;
	var aboutTop = $('#about').offset().top - 400;

	if (scroll < musicTop) {
		$('#home-link').addClass('selected');
		$('#music-link').removeClass('selected');
		$('#about-link').removeClass('selected');
	} 
	else if (scroll >= musicTop && scroll < aboutTop) {
		$('#home-link').removeClass('selected');
		$('#music-link').addClass('selected');
		$('#about-link').removeClass('selected');
	}
	else if (scroll >= aboutTop) {
		$('#home-link').removeClass('selected');
		$('#music-link').removeClass('selected');
		$('#about-link').addClass('selected');
	}
	else {
		$('#home-link').addClass('selected');
		$('#music-link').removeClass('selected');
		$('#about-link').removeClass('selected');
	}
});