
$('.recipient p').on('click', function() {
	$(this).css({
		"font-size" : "14px",
		"font-weight" : "bold",
		"background" : "#fff5cc url('../images/merge.png') no-repeat -1780px -1477px"
	})
	$(this).siblings('p').css({
			"line-height": "34px",
			"font-size": "12px",
			"color": "#656565",
			"background": "#fff url('../images/merge.png') no-repeat -1780px -1510px",
			"font-weight" : "normal"
	})
	$(this).children().css({
		"display" : "block"
	})
	$(this).siblings('p').children('em').css({
		"display" : "none"
	})
})


$(".fish span").on("click", function() {
	$(this).css({
		"background" : "url('../images/merge.png') no-repeat -1790px -1471px"
	}).siblings('span').css({
		"background": "url('../images/merge.png') no-repeat -1789px -1504px"
	})
})
