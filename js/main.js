var animating = false;
const supportsHover = window.matchMedia( "(hover:hover)" );

$(document).ready(function(){
	$("a").on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			if (!supportsHover.matches){
				clearSelected();
			}

			var menuHeight = $("#top-header").height();

			var offsetMenu = (hash != "#social-media") ? $(hash).offset().top - menuHeight : 0;

			animating = true;

			$('html,body').animate({
				scrollTop: offsetMenu
			}, 0, function(){animating=false;$(window).scroll()});
		}
	});
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var musicTop = $('#music').offset().top - 190;
	var aboutTop = $('#about').offset().top - 350;
	var atBottom = ($(window).scrollTop() + $(window).height() == $(document).height());

	if(atBottom){
		$('#home-link').removeClass('selected');
		$('#music-link').removeClass('selected');
		$('#about-link').addClass('selected');
	}

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
	}
});

var clearSelected = function(){
	$('#home-link').removeClass('selected');
	$('#music-link').removeClass('selected');
	$('#about-link').removeClass('selected')
};