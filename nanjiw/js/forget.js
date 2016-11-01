$('.finde em').on('click', function() {
	$('.conall > div').eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
	$('.linef').stop(true).animate({
		'left' : $(this).index() * 164 + 56 + 'px'
	})
})
// 电话验证
$('.phone').blur(function() {
	var re = /^1([38]\d|4[567]|5(?!4)\d|7[678])\d{8}$/g;
	var str = $('.phone').val();
	if (!re.test(str)) {
		$('.pleinpu3').css({
			'display' : 'block'
		})
	} else {
		$('.pleinpu3').css({
			'display' : 'none'
		})
	}
})
// 邮箱验证
$('.ema').blur(function() {
	var re = /^([a-zA-Z0-9_\.\-]+)\@(([a-zA-Z0-9\-])+\.)+[a-zA-Z]+$/g;
	var str = $('.ema').val();
	if (!re.test(str)) {
		$('.pleinpu1').css({
			'display' : 'block'
		})
	} else {
		$('.pleinpu1').css({
			'display' : 'none'
		})
	}
})
// 验证码
// function yzm(){
//     var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
//     var st = '';
//     for(var i = 0 ; i < 4 ; i ++ )
//         st += '' + arr[Math.floor(Math.random() * arr.length)];
//     return st;
// }
// $('.yz p').html(yzm());
// $('.secure').blur(function() {
// 	if ($('.secure').val() == $('.yz p').html()) {
// 		$('.pleinpu2').css({
// 			'display' : 'none'
// 		})
// 	} else {
// 		$('.pleinpu2').css({
// 			'display' : 'block'
// 		})
// 	}
// })