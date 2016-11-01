
(window.onload = function() {
    window.onresize = function() {
        initFont();
    }
    function initFont() {
        var htmlWidth = document.body.clientWidth;
        console.log(htmlWidth)
        if(htmlWidth >= 750) {
            document.documentElement.style.fontSize = 28 + 'px';
        } else {
            document.documentElement.style.fontSize = 28 / 750 * htmlWidth + 'px';
        }
    }initFont(); 
})();

// 达人页
$('.circle-con > div:nth-child(2)').css({
	'display' : 'none'
})
$('nav span').on('touchstart', function(){
	num = $(this).index();
	$(this).css({
		'color' : '#e60012'
	}).siblings().css({
		'color' : '#333'
	})
	$('.circle-con > div').eq(num).css({
		'display':'block'
	})
	$('.circle-con > div').eq(num).siblings().css({
		'display' : 'none'
	})
	wid = $('nav var').width();
	$('nav var').css({
		'left': num * wid
	})
})
// 帖子详情
$('.load-more').on('touchstart', function(){
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		var result = xhr.responseText;
		$('.load-more').before(result);
	}
	xhr.open('get', 'lan-load.html', true);
	xhr.send(null);
})
