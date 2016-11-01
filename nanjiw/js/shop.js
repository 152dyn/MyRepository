$('.props>div').eq(0).css({
			'background' : '#ffce55'
		})
$('.props>div').on('click', function() {
	if ($(this).index() == 0) {
		$(this).css({
			'background' : '#ffce55'
		}).siblings().css({
			'background' : ''
		})
	};
	if ($(this).index() == 1) {
		$(this).css({
			'background' : '#8b7bde'
		}).siblings().css({
			'background' : ''
		})
	};
	if ($(this).index() == 2) {
		$(this).css({
			'background' : '#d960b5'
		}).siblings().css({
			'background' : ''
		})
	};
	$('.pro-con>div').eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
})
// 大图滚动
function move() {
	var num = 0;
	$('.imgcon img').eq(0).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
	var time = setInterval(movel, 3000);
	function movel() {
		num++;
		if (num == $('.imgcon img').length) {
			num = 0;
		};
		$('.imgcon img').eq(num).fadeIn(500).siblings("img").fadeOut(500);
		$('.point li').eq(num).addClass('pitli').siblings().removeClass('pitli');
	}
	$('.point li').on('click', function() {
		num = $(this).index();
		if (time) {
			clearInterval(time);
		};
		$('.point li').eq(num).addClass('pitli').siblings().removeClass('pitli');
		$('.imgcon img').eq($(this).index()).fadeIn(500).siblings("img").fadeOut(500);
		time = setInterval(movel, 3000)
	})

} move();

// 交互
var nums = 0;
$('.pro-con img').on('mouseenter', function() {
	nums = $(this).offset();
	$(this).siblings('.pit').css({
		'left' : nums.left - 280,
		'top' : nums.top, 
		'display' : 'block'
	})
	$('.purch').css({
		'display' : 'none'
	})
})
$('.ites li').on("mouseleave", function() {
	$('.pit').css({
		'display' : 'none'
	})
})
$('.closes, .clo, .delet, .cancel, document').on('click', function() {
	$('.pit, .exact, .purch').css({
		'display' : 'none'
	})
})
$('.con-pit').on('click', function() {
	$('.pit').css({
		'display' : 'none'
	})
	$('.exact').css({
		'left' : nums.left - 280,
		'top' : nums.top, 
		'display' : 'block'
	})
})
$('.buy, .donate, .orders').on('click', function() {
	$('.exact').css({
		'display' : 'none'
	})
	$('.purch').css({
		'display' : 'block'
	})
})
var nus = 0;
$('.purs').on('click', function() {
	nus = $(this).offset();
	$('.purch').css({
		'display' : 'block'
	})
	$('.pit').css({
		'display' : 'none'
	})
})
var sumall = 0;
$('.sum').on('click', function() {
	sumall = $('.txt').val();
	sumall++;
	$('.txt').val(sumall)
})
$('.tract').on('click', function() {
	sumall = $('.txt').val();
	sumall--;
	if (sumall == 0) {
		sumall = 0;
		return sumall;
	};
	$('.txt').val(sumall)
})
$('.ensure').on('click', function() {
	$('.purch').css({
		'display' : 'none'
	})
	$('.txt').val('1')
})
$('.cancel').on('click', function() {
	$('.txt').val('1')
})
//返回顶部
$(window).scroll(function() {
	var scrollTopVal = document.body.scrollTop;
	if (scrollTopVal >= 80) {
		$('.movba').css({
			'display' : 'block'
		})
	} else {
		$('.movba').css({
			'display' : 'none'
		})
	}
	
})
$('.movba').on('click', function() {
	$('body').stop(true).animate({
		'scrollTop' : 0
	}, 500)
})