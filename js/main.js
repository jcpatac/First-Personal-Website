function main() {

	(function () {
		'use strict';

		$('a.page-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 40
					}, 900);
					return false;
				}
			}
		});

		// SHOW NAVBAR AFTER SCROLL BELOW THE HEADER
		$('#nav').affix({
			offset: {
				top: $('header').height()
			}
		});
		// SKILLS CHART
		$(document).ready(function(e) {
			var index = 0;
			$(document).scroll(function() {
				var top = $('#skills').height()-$(window).scrollTop();
				console.log(top)
				if (top <- 300) {
					if (index == 0) {
						$('.chart').easyPieChart({
							easing: 'easeOutBounce',
							onStep: function(from, to, percent) {
								$(this.el).find('.percent').text(Math.round(percent));
							}
						});
					}
					index++;
				}
			})
			// console.log(negativeValue);
		});

		// Counter Up
		$(document).ready(function($) {
			if ($("span.count").length > 0) {
				$('span.count').counterUp({
					delay: 10,
					time: 1500
				});
			}
		});
	}());

}

main();