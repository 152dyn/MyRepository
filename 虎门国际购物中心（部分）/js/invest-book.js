
function booBtn(){
	$('.book-btn p strong').eq(1).click(function() {
		$('.page').stop(true).animate({
			"width":"480px",
			"right":"480px"
		},1000)
	})
	$('.book-btn p strong').eq(0).click(function() {
		$('.page').stop(true).animate({
			"width":"0px",
			"right":"0px"
		},1000)
	})
}
booBtn();
var bok = document.getElementById("book");
var nextbtn = document.getElementById("nextbtn");
nextbtn.onclick = function() {
	function launchFullscreen(element) {
	  if(element.requestFullscreen) {
	    element.requestFullscreen();
	  } else if(element.mozRequestFullScreen) {
	    element.mozRequestFullScreen();
	  } else if(element.webkitRequestFullscreen) {
	    element.webkitRequestFullscreen();
	  } else if(element.msRequestFullscreen) {
	    element.msRequestFullscreen();
	  }
	}
	launchFullscreen(bok); 
	picWin();
}
function picWin() {
	var windowWidth;
	var windowHeight;
	windowWidth = $(this).width();
	windowHeight = $(this).height();
	$('.book').height(windowHeight);
	$('.book img').height(windowHeight);
	$('.page img').height(windowHeight);
	$('.page').height(windowHeight);
	$('.book').width(windowWidth);
	$('.book img').width(windowWidth)
	$('.page img').width(windowWidth/2);
	$('.book p').css({
		"display":"none"
	})
	$(document).keyup(function(event){ 
		if(event.keyCode == 37){ 
			if ($('.book').width() == windowWidth) {
					$('.page').stop(true).animate({
						"width":windowWidth/2,
						"right":windowWidth/2
					},1000)	
			} else {
				$('.page').stop(true).animate({
					"width":"490px",
					"right":"490px"
				},1000)
			}
		} else if (event.keyCode == 39) {
			$('.page').stop(true).animate({
				"width":"0px",
				"right":"0px"
			},1000)
		} else {
			exitFullscreen();
			picbok();
		}
	}); 
}
bok.onclick = function() {
	exitFullscreen();
	picbok();
}
function picbok() {
  	$('.book, .book img').css({
  		"width":"980px",
  		"height":"446px"
	 })
  	$('.page img').css({
  		'width':"490px",
  		"right":"0"
  	})
  	$('.page').css({
  		"width":"0",
  		"height":"446px"
  	})
 	$('.book p').css({
		"display":"block"
	})	
}
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}
