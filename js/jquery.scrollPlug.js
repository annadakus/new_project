(function($){

	$.fn.scrollPlug = function(){

		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.btnToTop').fadeIn();
			} else {
				$('.btnToTop').fadeOut();
			}
		});

	var make = function(){

	
		$(this).click(function(event){
			event.preventDefault();
			var id = $(this).attr("href");
			var offset = $(id).offset().top;
			$("html, body").animate({
				scrollTop: offset
			});

		});


	};

	return this.each(make)

	}

}(jQuery))

