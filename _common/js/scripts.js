$(function(){
	/***************\ 
	** SLIDER CODE **
	\***************/
	
	//Declare the loop interval in MILLISECONDS - Default 4000 = 4secs
	var loopInterval = 4000;
	
	//Get slider
	var slider = $(".slider");
	
	//Get slides
	var slides = slider.find(".slide");
	
	//Declare the slides array
	var slide = [];
	
	//Store slides in array
	slides.each(function(s){
		slide[s] = $(this);
	});
	
	//Show first slide
	slide[0].fadeIn();
	$(".arrow").css("opacity", "0.6");
	$(".slider-overlay").css("opacity", "1");
	
	//Set currentslide to 0 for array
	var currentSlide = 0;
	
	//Set last slide - 1 for array
	var lastSlide = $(".slide").length - 1;
	
	//Declare the var to store the interval
	var loop;
	
	//Store the next slide function in a variable
	var nextSlide = function(){
		slide[currentSlide].fadeOut();
		$(".arrow").css("opacity", "0");
		$(".slider-overlay").css("opacity", "0");
		//If not last slide, go to next slide
		if (currentSlide != lastSlide){
			currentSlide++;
		} else {
		//Else if last slide, go back to first slide
			currentSlide = 0;
		}
		
		setTimeout(function(){
			slide[currentSlide].fadeIn();
			$(".arrow").css("opacity", "0.6");
			$(".slider-overlay").css("opacity", "1");
		},400);
	}
	
	//Store the previus slide in a variable
	var prevSlide = function(){
		slide[currentSlide].fadeOut();
		$(".arrow").css("opacity", "0");
		//If not last slide, go to next slide
		if (currentSlide != 0){
			currentSlide--;
		} else {
		//Else if last slide, go back to first slide
			currentSlide = lastSlide;
		}
		
		setTimeout(function(){
			slide[currentSlide].fadeIn();
			$(".arrow").css("opacity", "0.6");
		},400);
	}
	
	//Start slider function
	function startSlider(){
		//Loop next slide
		loop = setInterval(nextSlide, loopInterval);
	}
	
	//Stop slider function
	function stopSlider(){
		clearInterval(loop);
	}
	
	//On hover toggle loop
	$(".slider").hover(stopSlider, startSlider);
	
	//Left arrow clicked
	$(".arrow-left").on("click", prevSlide);
	
	//Right arrow clicked
	$(".arrow-right").on("click", nextSlide);
	
	//Start the slider
	startSlider();
});