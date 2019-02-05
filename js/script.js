$(window).on("load", function() {
	$(".loader .inner").fadeOut(2000, function() {
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*', 
		animationOptions: {
			duration: 1500,
			easing: 'linear', 
			queue: false
		} 
	});
})




// This code will execute when the documnet is ready.
$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 3500,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["| Software Developer |", "| Web Developer |", "| Coffee Enthusiast |", "| Design Thinker |"],
		typeSpeed: 120,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});


	// var autotype = new Typed(".autotype", {
	// 	strings: ["My name is Reece Kenney and I'm from Rugby, England. I'm 24 years old and currently working as a Software Engineer at Microsoft. In May 2015 I graduated Leeds Beckett University, formerly Leeds Metropolitan with a First Class Computing degree and I also studied Computer Science at Purdue University in Indiana, USA (ranked 48th in the world)."],
	// 	typeSpeed: 50,
	// 	// loop: true,
	// 	startDelay: 1000,
	// 	showCursor: false
	// });



	$('.owl-carousel').owlCarousel({
	    autoplay: true,
		autoplayTimeout: 3000,
	    loop:true,
	    nav: true,
	    // autoplayHoverPause: true,
	    animateOut: 'fadeOut',
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());
				element.countup(endVal);
			})

			countUpFinished = true;

		}


	});

	$("[data-fancybox]").fancybox();

	

	$("#filters a").click(function() {
	$("#filters .current").removeClass("current");
	$(this).addClass("current");
	
		var selector = $(this).attr("data-filter");
		$(".items").isotope({
			filter: selector, 
			animationOptions: {
				duration: 1500,
				easing: 'linear', 
				queue: false
			} 
		});
		return false;


	});


	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow"); 

	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else{
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}

});


