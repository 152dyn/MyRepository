$('.reports').on('click', function  () {
	$(".mask").css({
		'display' : 'block'
	})
	$('.report').css({
		"display" : "block"
	})
})
$('.report em, .sure, .cancel, .messages em').on('click', function() {
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

$('.chat').on('click', function() {
	$('.mask').css({
		'display' : 'block'
	})	
	$('.messages').css({
		'display' : 'block'
	})		
})


$('.follow').on('click',function() {
	if (this.num == false) {
		$(this).html('关注').css({
			"padding-left" : "14px",
			"width" : "38px",
			"background" : "url('../images/merge.png') no-repeat -1249px -200px"
		})
		this.num = true;
	} else {
		$(this).html('果取关').css({
			"padding-left" : "4px",
			"width" : "48px",
			"background" : "#fff"
		})
		this.num = false;
	}

})