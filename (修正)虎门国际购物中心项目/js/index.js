function picWin() {
		var windowWidth;
		var windowHeight;
		$(window).resize(function(){
			windowWidth = $(this).width();
			windowHeight = $(this).height();
			if (windowWidth <= 1000) {
				$('.pic').css({
				'width' : 1000
				})
			}else {
				$('.pic').css({
				'width' : windowWidth
				})
			}
			if(windowHeight >= 727) {
				$('.pic, .pic-con img').css({
					'height':'727px'
				})
			}else{
				$('.pic, index-con').height(windowHeight)
				$('.pic-con img').height(windowHeight)
			}
		})
	}
picWin();
function indWeb() {
	$(".ind-nav p span, .sina").click(function() {
		$('.ind-nav p span em, .sina').css({
			"display":"block"
		})
		$('.sina-con').stop(true).animate({
			"margin-top":"0"
		},1000)
		$('.pic').css({
			"margin-left":"-280px"
		})
	})
	$(".pic-con img ").mouseover(function() {
		$('.sina-con').stop(true).animate({
			"margin-top":"644"
		},1000)
		$('.ind-nav p span em,.sina').css({
			"display":"none"
		})
		// $('.sina-con').stop(true).fadeOut(1000);
		$('.pic').css({
			"margin-left":"0"
		})
		$(".ind-nav p em, .ind-webchat").css({
				"display":"none"
		})
	})
	$(".ind-nav p strong").click(function() {
		$(".ind-nav p strong em, .ind-webchat").css({
			"display":"block"
		})
	})
}
indWeb();
function indPic() {
	var imgIndex = 0;
	var timer =null;
	var picNum = $('.pic-con a').length;
	timer = setInterval(move,2000)
	function move(){
		$('.pic-con a').eq(imgIndex).stop(true).fadeIn(2000).siblings().stop(true).fadeOut(2000);
		$('.plist span').eq(imgIndex).addClass('pshow').siblings().removeClass('pshow');
		imgIndex++;
		if (imgIndex == picNum) {
			imgIndex = 0;
		};
	}
	$('.plist span').on('click',function(){
		if (timer) {
			clearInterval(timer)
		};
		imgIndex = $(this).index();
		$(this).addClass('pshow').siblings().removeClass('pshow');
		$('.pic-con a').eq(imgIndex).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
		timer = setInterval(move,2000);
	})
}
indPic();
function indLink() {
	$('.fast-rode a img').mouseover(function() {
		$(this).eq(0).addClass('fshow').siblings().removeClass('fshow');
	})
	$('.fast-rode a img').mouseout(function() {
		$(this).eq(1).addClass('fshow').siblings().removeClass('fshow');
	})
}	
indLink();