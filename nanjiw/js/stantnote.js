$('.ntl li').eq(3).css({
			'background' : '#e6ebd5',
			'color' : '#839a40'
		})
$('.ntl li').on('click', function() {
	if ($(this).index() == 0) {
		$('.cuss1').css({
			"background" : "url('../images/merge.png') -414px -577px no-repeat"
		}).parents().siblings().children().children('span').css({
			"background" : ''
		})
		$(this).css({
			'background' : '#e3f1fa',
			'color' : '#54b2e8'
		}).siblings().css({
			'background' : '',
			'color' : ''
		})
	};
	if ($(this).index() == 1) {
		$('.myid1').css({
			"background" : "url('../images/merge.png') -408px -664px no-repeat"
		}).parents().siblings().children().children('span').css({
			"background" : ''
		})
		$(this).css({
			'background' : '#ede2f2',
			'color' : '#ad7ac7'
		}).siblings().css({
			'background' : '',
			'color' : ''
		})
	};
	if ($(this).index() == 2) {
		$('.secr1').css({
			"background" : "url('../images/merge.png') -412px -750px no-repeat"
		}).parents().siblings().children().children('span').css({
			"background" : ''
		})
		$(this).css({
			'background' : '#dbced8',
			'color' : '#482a42'
		}).siblings().css({
			'background' : '',
			'color' : ''
		})
	};
	if ($(this).index() == 3) {
		$('.sysnote1').css({
			"background" : "url('../images/merge.png') -414px -840px no-repeat"
		}).parents().siblings().children().children('span').css({
			"background" : ''
		})
		$(this).css({
			'background' : '#e6ebd5',
			'color' : '#839a40'
		}).siblings().css({
			'background' : '',
			'color' : ''
		})
	};
	$('.box-note>div').eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
	$('.line').css({
		'left' : '56px'
	})
})
$('.select em').on('click', function() {
	$('.line').stop(true).animate({
		'left' : $(this).index() * 164 + 56 + 'px'
	})
	$('.dis-box ul').eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
	$('.ide-box ul').eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
})
$('.dele1, .dele2, .dele3, .dele4, .dele5, .dele6').on('click', function() {
	var _this = $(this);
	$(".mask").css({
		"display" : "block"
	})
	$(".conf").css({
		'display' : 'block'
	})
	$('.dle').on('click', function() {
		$(".mask, .conf").css({
		"display" : "none"
		})
		$(_this).closest('li').remove();

	})
	$('.nodes').on('click', function() {
		$(".mask, .conf").css({
			"display" : "none"
		})
	})
})
$('.logcon span').on('click', function() {
	var liNode = $('.sec-histo li:first').clone(true);
	var txCon = $('.txt').val();
	$(".sec-histo li:first").before(liNode);
	$(".sec-histo li:first p").html(txCon);
})

//
$('.denoun').on('click', function() {
	$('.mask').css({
		'display' : 'block'
	})	
	$('.report').css({
		'display' : 'block'
	})
})
$('.report em').on('click', function() {
	$('.mask').css({
		'display' : 'none'
	})	
	$('.report').css({
		'display' : 'none'
	})
	$('.report span').css({
		'background' : 'none'
	})
	$('.report span').each(function() {
		$(this)[0].isSelect = true;
	})
})
$('.report em, .sure, .cancel,.messages em').on('click', function() {
	$('.report').css({
		'display' : 'none'
	})
	$('.report span').css({
		'background' : 'none'
	})
	$('.messages').css({
		"display" : "none"
	})
	$('.mask').css({
		'display' : 'none'
	})
	$('.report span').each(function() {
		$(this)[0].isSelect = true;
	})
})
// var isSelect = true;
$('.report  span').on('click', function() {
	if(this.isSelect == false) {
		$(this).css({
			'background' : 'none'
		})
		this.isSelect = true;
	} else {
		$(this).css({
			'background' : "url('../images/merge.png') no-repeat -1404px -1053px"
		})
		this.isSelect = false;
	}

})
