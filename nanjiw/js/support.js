var num = 1;
$('.reword-con strong').on('click', function(){
	if (num == 1) {
		console.log(0);
		$(this).css({
			'background' : "url('../images/merge.png') no-repeat -1794px -1483px"
		})
		num = 0;
	} else {
		$(this).css({
			'background' : " url('../images/merge.png') no-repeat -1794px -1516px"
		})
		num = 1;
	}
})


$('.region h3').on('click', function (e) {
	e.stopPropagation();
	window.event.cancleBubble = true;
	window.event.returnValue = false;
	$(this).parent().siblings('div').children('div').css({
		"display" : "none"
	});
	if (this.click == false) {
		$(this).siblings('div').css({
			"display" : "none"
		})
		this.click = true;
	} else {
		$(this).siblings('div').css({
			"display" : "block"
		})
		$(this).parent().siblings('div').children('h3').each(function(){
			$(this)[0].click = true;
		})
		this.click = false;
	}
})
$('.region p').on('click', function() {
	$(this).parents().siblings('h3').html($(this).html());
	$(this).parent().parent().css({
		"display" : "none"
	})
	$('.region h3').each(function(){
			$(this)[0].click = true;
		})
})
$(document).on('click',function() {
	$('.region h3').each(function(){
			$(this)[0].click = true;
		})
	$(".region h3").siblings('div').css({
			"display" : "none"
		})
})