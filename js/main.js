$(document).ready(function(){
	$("a").on('click', function(event){
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			console.log(hash)
			var offsetMenu = (hash != "#home") ? $(hash).offset().top-140 : 0;

			$('html,body').animate({
				scrollTop: offsetMenu
			}, 800);
		}
	});
});