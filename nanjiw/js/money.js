//资产管理大tab
$('.tabtits-j span').on('click', function() {
	$('.show-j').children().eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
	$('.tabtits-j div').animate({
		'left' : 145 + $(this).index()* 178
	})
})

$('.gift-tits-j span').on('click', function() {
	$('.gift-tab').children().eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
})

$('.yet-var').on('mouseover', function() {
	$('.grade-j').css({
		'display' : 'block'
	})
})
$('.yet-var').on('mouseout', function() {
	$('.grade-j').css({
		'display' : 'none'
	})
})

// 资产管理 南极币管理 tab
$('.time-j span').on('click', function() {
	$('.find-tab').css({
		'display' : 'table'
	})
})
$('.tits-j span').on('click', function() {
	$(this).css({
		'background' : '#fafafa'
	}).siblings().css({
		'background' : '#fff'
	})
	$('.tab-table').children().eq($(this).index()).css({
		'display' : 'table',
	}).siblings().css({
		'display' : 'none'
	})
})

// 道具管理 tab
$('.tool-tits-j span').on('click', function() {
	$(this).css({
		'background' : '#fafafa'
	}).siblings().css({
		'background' : '#fff'
	})
	$('.tool-tab').children().eq($(this).index()).css({
		'display' : 'table'
	}).siblings().css({
	    'display' : 'none'
	})
})

//全选

$('.exchange-j h3 div').on('click', function() {
	if(this.clicked) {
		$(this).css({
			'background' : 'url("../images/login.png") -82px -241px no-repeat'
		})
		this.clicked=false;
	} else {
		$(this).css({
			'background' : 'url("../images/login.png") -54px -241px no-repeat'
		})
		this.clicked=true;
	}
})