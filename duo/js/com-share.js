// $('header #share').on('touchstart', function(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.onload = function(){
// 		var result = xhr.responseText;
// 		$('body').before(result);
// 	}
// 	xhr.open('get', 'com-share.html', true);
// 	xhr.send(null);
// })
// var bool = true;
$('header #share').on('touchstart', function() {
	$('body .com-share').css({
		'display' : 'block'
	})
})
$('body .com-share').on('touchstart', function() {
	$('body .com-share').css({
		'display' : 'none'
	})
})
