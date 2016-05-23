/*
 *
 *
 */
function picWin() {
		var windowWidth;
		var windowHeight;
		$(window).resize(function(){
			windowWidth = $(this).width();
			windowHeight = $(this).height();
			if (windowWidth <= 1000) {
				$('.wrap').css({
				'width' : 1000
				})
			}else {
				$('.wrap').css({
				'width' : windowWidth
			})
			}
			if(windowHeight >= 768) {
				$('.faclist, .faclist img').css({
					'height':'644px'
				})
			}else{
				$('.faclist').height(windowHeight)
				$('.faclist img').height(windowHeight)
			}
		})
	}
picWin();
/*
 *
 *
 */
function fodCli() {
	$('.cleft').click(function(){
		$('.food').addClass('block').siblings().removeClass("block");
	})
	$('.cright').click(function(){
		$('.amuse').addClass('block').siblings().removeClass("block");
	})
} 
fodCli();
/*
 *
 *
 */
function fodPcl() {
	$('.navlist div p').click(function(){
		if ($(this).index() == 0) {
			$('.food').addClass('block').siblings().removeClass("block");
		} 
		if($(this).index() == 1) {
			$('.amuse').addClass('block').siblings().removeClass("block");
		}
	})
}
fodPcl() 
/*
 * 功能：美食荟萃Tab切换
 *
 */
 function fodMov() {
 	var fodpIndex = 0;
 	$('.fleft').click(function() {
 		fodpIndex--;
 		if (fodpIndex < 0) {
 			fodpIndex = $(this).siblings('p').length - 1;
 		}
 		console.log($(this));
 		console.log($(this).siblings('p'));
 		console.log(fodpIndex);
	 	$(this).siblings('p').eq(fodpIndex).addClass('fdshow').siblings('p').removeClass('fdshow');
	})
	$('.fright').click(function() {
 		fodpIndex++;
 		if (fodpIndex > $(this).siblings('p').length - 1) {
 			fodpIndex = 0;
 		}
 		console.log(fodpIndex);
	 	$(this).siblings('p').eq(fodpIndex).addClass('fdshow').siblings('p').removeClass('fdshow');
	})
 }
 fodMov()
/*
 *
 *
 */
function fodSle() {
	$('.navlist a').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).index() == 1) {
			$('.navlist div').css ({
				"display":"block"
			})
		}else {
			$('.navlist div').css ({
				"display":"none"
			})
		}
	},function(){
		$('.navlist div').mouseover(function(){
			$('.navlist div').css({
				"display":"block"
			})
		})
		$('.navlist div').mouseout(function() {
			$('.navlist div').css({
				"display":"none"
			})
		})
	}) 
}
fodSle();
/*
 *
 *
 */
function fodList() {
	$('.faclist').hover(function() {
		$('.cleft, .cright').css({
			"display":"block"
		})
	},function() {
		$('.cleft, .cright').css({
			"display":"none"
		})
	})
}
fodList();
/*
 *
 *
 */
function fodAum() {
	$('.amuse').hover(function() {
		$('.aleft, .aright').css({
			"display":"block"
		})
	},function() {
		$('.aleft, .aright').css({
			"display":"none"
		})
	})
}
fodAum();
/*
 *
 *
 */
function amuMove() {
		var imgInde = 0;
		$('.aright').on('click',function(){
			imgInde++;
			if (imgInde > 4) {
				imgInde = 0;
			};
			scrWidth = 258*imgInde;
			$('.amuse-con').stop().animate({
				"scrollLeft":scrWidth
			},1000)
		})
		$('.aleft').on('click',function(){
			imgInde--;
			if (imgInde < 0) {
				imgInde = 4;
			};
			scrWidth = 258*imgInde;
			$('.amuse-con').stop().animate({
				"scrollLeft":scrWidth
			},1000)
		})
	}
amuMove();
/*
 *
 *
 */
function actSide() {
	$('.concenter').slideDown(1000);
	$('.conright, .conleft').slideDown(2000);
}
actSide();
/*
 * 功能：活动推广场地：滑动效果、自定义滚动条
 * 参数：oldX 鼠标初始点击值
 *		 nowDisX 滑动距离
 *		 newX 鼠标当前位置
 *		 liWidth 内容区长
 *		 lilen 获取li个数
 * 作者：北有喬木
 */				
 function coopMove() {
 	var liLen = 0;
 	var liWidth = 0;
 	var oldX = 0;
 	var nowDisX = 0;
 	var newX = 0;
 	liLen = $('.ic-con ul li').length;
 	liWidth = $('.ic-con ul li').outerWidth();
 	$('.ic-con ul').width(liLen * liWidth);
 	$('.coop-scroll').mousedown(function(e) {
 		oldX = e.clientX;
		nowDisX = $('.coop-scroll').offset().left - $('.coop-scrbox').offset().left;
		console.log(nowDisX);
		e.preventDefault();
		$(document).mousemove(function(e) {
			e.preventDefault();
			newX = e.clientX;
			var nowX = nowDisX + newX - oldX;
			var maxX = $('.coop-scrbox').outerWidth() - $('.coop-scroll').outerWidth(); 
			if (nowX <= 0) {
				nowX = 0;
			};
			if (nowX >= maxX) {
				nowX = maxX;
			};
			$('.ic-con').scrollLeft(nowX / maxX * ($('.ic-con').innerWidth()));
			$('.coop-scroll').css({
				"left": nowX + 'px'
			})
		})
 	})
 	$(document).mouseup(function () {
		$(document).unbind("mousemove");
	})
 }
 coopMove();