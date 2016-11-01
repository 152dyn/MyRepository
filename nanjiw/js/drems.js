$(".drem-nav span").on("click", function() {
	_index = $(this).index();
	$(".drem-line").stop().animate({
		"left" : _index * 164 + 54 +'px'
	})
	$(".now-show").children().css({
		"display" : "none"
	})
	$(".now-show").children().eq(_index).css({
		"display" : "block"
	})
})
var index = 0;
$(".compelet").on("click", function() {	
	index = $(this).parent().index();
	$('.mask').css({
		"display" : "block"
	})
	$(".drem-alert").css({
		"display" : "block"
	})
	$('.dre-confirm').on('click', function () {
		$(".drem-con li").eq(index).children('.compelet').off("click"); //移除click
		$(".mask").css({
		"display" : "none"
		})
		$(".select em").css({
			"background" : "none"
		})
		$(".drem-alert").css({
			"display" : "none"
		})
		$(".drem-con li").eq(index).css({
			"background" : "#fff"
			}).children(".compelet").addClass('compeleted').removeClass('compelet').children('span').html('已完成')
		})
})
$(".dre-cancel,.drem-alert h1 strong").on("click", function  () {
	$(".mask").css({
		"display" : "none"
	})
	$(".drem-alert").css({
		"display" : "none"
	})
	$(".select em").css({
		"background" : "none"
	})
	$('.select em').each(function(){
			$(this)[0].num = true;
		})
	
})


$(".select em").on("click", function() {
	if (this.num == false) {
		$(this).css({
				"background" : "none"
			})
		this.num = true;
	} else {
		console.log(0);
		$(this).css({
				"background" : "url('../images/merge.png') no-repeat -1404px -1053px"
		})
		this.num = false;
	}
})






