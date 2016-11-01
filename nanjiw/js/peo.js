// 个人属性tab切换
$('.peo-nav span').on('click', function() {
	$('.peo-tab ').children().eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
	$('.peo-line').animate({
		'left' : 59+ $(this).index()*174
	})
})

// 账号设置tab切换
$('.acc-nav span').click(function() {
	$('.acc-tab').children().eq($(this).index()).css({
		'display' : 'block'
	}).siblings().css({
		'display' : 'none'
	})
	$('.acc-line').animate({
		'left' : 144 + $(this).index()*178
	})
})

//图片上传
function preview1(file) {
	var img = new Image();
	var url = img.src = URL.createObjectURL(file);
	var $img = $(img);//将img转化为JQ对象
	img.onload = function() {
		URL.revokeObjectURL(url)
		$('.pos').empty().append($img)
	}
}
function preview2(file) {
	var reader = new FileReader()
	reader.onload = function(e) {
		var $img = $('<img>').attr('src', e.target.result)
		$('.pos').empty().append($img)
	}
	reader.readAsDataURL(file)
}
$(function() {
	$('[type=file]').change(function(e) {
		var file = e.target.files[0]
		preview1(file)
	})
})

//账号设置密码修改
$('.alter').on('click', function() {
	$(this).parent().css({
		'display' : 'none'
	})
	$(this).parent().siblings().css({
		'display' : 'block'
	}).animate({
		'height' : '204px'
	},500)
})
$('.pho-rim span').on('click', function() {

	$(this).parent().parent().parent().siblings().css({
		'display' : 'block'
	})
	$(this).parent().parent().parent().css({
		'display' : 'none'
	}).animate({
		'height' : '78px'
	},500)
	$(this).siblings().val('')
})

//个人设置 生日 地区
$(document).on('click', '*', function(e) {
	e.stopPropagation();
	if (this.className == 'years' || this.className == 'months' || this.className == 'days') {
		if (this.show) {
			$(this).next('div').css({
			'display' : 'none'
			})
			this.show = false;
		} else {
			$(this).next('div').css({
			'display' : 'block'
			})
			this.show = true;
		}
		$(this).parent().siblings('div').children('div:odd()').css({
			'display' : 'none'
		})
		$(this).parent().siblings('div').children('div').each(function(){
			$(this)[0].show = false;
		})
	} else {
		$('.year, .month, .day').css({
			'display' : 'none'
		})
	}
	if($(this).parent()[0].className == 'year' || $(this).parent()[0].className == 'month' || $(this).parent()[0].className == 'day') {
		$(this).parent().siblings().html($(this).html());
		$(this).parent().css({
			'display' : 'none'
		})

		$(this).parent().parent().children('div').each(function() {
			$(this)[0].show = false;
		})
		$(this).parent().parent().siblings('div').children('div').each(function() {
			$(this)[0].show = false;
		})
	}
})

//爱好
var num = 0;
$('.add-ints span').click(function () {
	if ($('.add-ints input').val() != '' && num < 3) {
		$('.hobby').append('<span>'+$('.add-ints input').val()+'<em></em></span>');
		$('.add-ints input').val('');
		num++;
		console.log(num)
	}
})
// 热门标签
$('.hot span').on('click', function() {
	if( num < 3) {
		$('.hobby').append('<span>'+$(this).html()+'<em></em></span>')
		num++;
	}
	console.log(num)
})

$('.hobby').delegate('span', 'mouseover', function() {
	$(this).css ({
		'padding' : '0px 20px 0px 10px'
	}).children().css({
		'right' : '0'
	})
})
$('.hobby').delegate('span','mouseout',function() {
	$(this).css ({
		'padding' : '0 10px 0 10px'
	}).children().css({
		'right' : '-15px'
	})
})
$('.hobby').delegate('em', 'click', function() {
	$(this).parent('span').css({
		'display' : 'none'
	})
	num--;
	console.log(num)
})

//男女选择
$('.gender').children().on('click', function() {
	$(this).css({
		'background': 'url("../images/merge.png") -1804px -1483px no-repeat'
	}).siblings().css({
		'background': 'url("../images/merge.png") -1804px -1516px no-repeat'
	})
})

//职业弹窗
$('.post').on('click', function() {
	$('.mask-post').css({
		'display' : 'block'
	})
})
$('.post-cancel').on('click', function() {
	$('.mask-post').css({
		'display' : 'none'
	})
})
$('.post-kind span').on('click', function() {
	$(this).addClass('spec').css({
		'background' : '#65c4f9'
	}).siblings().removeClass('spec').css({
		'background' : '#fff'
	})
})
$('.post-sure').click(function() {
	$('.post').html($('.spec').html()).css({
		'text' : 'center'
	})
	$('.mask-post').css({
		'display' : 'none',
		'background' : ''
	})
})

