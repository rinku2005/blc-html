;(function($) {
	$(document).ready( function(e) {
			/* Header Sticky */
			$(window).scroll(function() {
				if ($(this).scrollTop() > 1){  
					$('.fluid').addClass("sticky");
				  }
				  else{
					$('.fluid').removeClass("sticky");
				  }
			});
        });
    })(jQuery);