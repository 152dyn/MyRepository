$('.tabtits-j span').on('click', function() {
	num = $(this).index();
	$('.tabtits-j div').css({
		'left' : 145 + num * 178 + 'px'
	})
	$('.show-j').children('div').eq(num).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
})