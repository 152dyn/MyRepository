$('.message').on('click', function() {
	$('.mask').css({
		'display' : 'block'
	})	
	$('.messages').css({
		'display' : 'block'
	})		
})
$('.messages em').on('click', function() {
	$('.mask').css({
		"display" : "none"
	})
	$('.messages').css({
		'display' : 'none'
	})
})
$('.user').on('click', function() {
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

$('.tit span').on('click', function() {
	$(this).addClass('sel').siblings().removeClass('sel');
})


$('.share').on('click', function() {
	if(this.isClick == false) {
		$(this).parents().siblings('.link').css({
			"display" : "none"
		})
		this.isClick = true;
	} else {
		$(this).parents().siblings('.link').css({
			'display' : 'block'
		})
		$(this).siblings('.share').each(function(){
            $(this)[0].isClick = true;
        })
		this.isClick = false;

	}
})
$('.sure, .cancel').on('click', function() {
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

$('.chat').on('click', function() {
	$('.mask').css({
		'display' : 'block'
	})	
	$('.messages').css({
		'display' : 'block'
	})		
})
