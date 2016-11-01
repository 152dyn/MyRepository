//好友认证：
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

$('.all-j strong').css({
	'float' : 'right',
	'padding' : '0 30px',
	'height' : '38px',
	'line-height' : '38px',
	'color' : '#ccc',
	'background' : 'url(../images/merge.png) -718px -390px no-repeat'
})
$('.all-j strong').on('click', function(){
	$(this).children().html('已关注').css({
		'color' : '#000'
	})
})
$('.all-j span:eq(2)').css({
	'margin-left' : '10px'
})
$('.con-left').children('div:eq(0)').css({
	'display' : 'block'
}).siblings().css({
	'display' : 'none'
})
$('.talk-j dd var:eq(0)').css({
	'background' : 'url(../images/merge.png) -910px -394px no-repeat'
})
$('.talk-j dd var:eq(1)').css({
	'background' : 'url(../images/merge.png) -880px -394px no-repeat'
})
$('.talk-j dd var:eq(2)').css({
	'background' : 'url(../images/merge.png) -849px -394px no-repeat'
})
$('.other-con').children('span:eq(1)').css({
	'color' : '#41a0bc'
})

$('.all-j var:eq(0)').css({
	'background' : '#0cd9cd',
	'color' : '#fff'
})
$('.all-j var').on('click', function() {
	num = $(this).index();
		$(this).css({
			'background' : '#0cd9cd',
			'color' : '#fff'
		}).siblings().css({
			'background' : '#efefef',
			'color' : '#b8b8b8'
		})
$('.con-left').children('div').eq(num).css({
	'display' : 'block'
}).siblings().css({
	'display' : 'none'
	})
})

// 点赞
$('.about-user dd ul').on('click', function() {
	_num = $(this).children('li').html();
	$(this).children('li').html(++_num)
})
// 
$('.about-user var').on('click', function() {
	$('.mask').css({
		'display' : 'block'
	})	
	$('.messages').css({
		'display' : 'block'
	})		
})
$('.sure, .cancel,.messages em').on('click', function() {
	
	$('.messages').css({
		"display" : "none"
	})
	$('.mask').css({
		'display' : 'none'
	})
	
})