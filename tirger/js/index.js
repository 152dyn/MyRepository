

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