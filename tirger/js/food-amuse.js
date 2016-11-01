/*
 *
 *
 */
function picWin() {
		var windowWidth;
		var windowHeight;
		windowWidth = $(this).width();
		windowHeight = $(this).height();
		if (windowHeight > 800) {
			$('.nav').next().height(windowHeight - 124)
            $('.pic').height(windowHeight - 48)
        };
        $('.content-registration').height($('.regcon').height())
        $('.content-tal').height($('.talcon').height())
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
			if (windowHeight <= 680) {
				$('.wrap').css({
				'height' : 680
				})
			}else {
				$('.wrap').css({
				'height' : windowHeight
				})
			}
			if (windowHeight > 800) {
			$('.nav').next().height(windowHeight - 124)
		};
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
    $('.navlist strong a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.navlist li').hover(function(){
        $(this).find('span').css ({
            "display":"block"
        })
        $(this).find('div').stop(true).slideDown(500)
    },function() {
        $(this).find('span').css ({
                "display":"none"
            })
        $('.active span').css({
            "display":"block"
        })
        $(this).find('div').stop(true).slideUp(500)
    })
}
fodSle();
/*
 *
 *
 */
function fodList() {
	$('.fusion').hover(function() {
		$('.fus-left, .fus-right').css({
			"display":"block"
		})
	},function() {
		$('.fus-left, .fus-right').css({
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
 * 功能：活动纵览：大图滚动
 * 参数：boxWidth  外边框宽度
 *		 conWidth  内边框宽度
 *		 conliWidth 内容小块宽度
 *		 conliLen   内容长度
 * 		 step       速度值
 *		 change     判断方向
 *		 boxScorl   滚动距离
 * 作者：北有喬木
 */
 /* 
 * 功能：活动纵览：大图滚动
 * 参数：boxWidth  外边框宽度
 *       conWidth  内边框宽度
 *       conliWidth 内容小块宽度
 *       conliLen   内容长度
 *       step       速度值
 *       change     判断方向
 *       boxScorl   滚动距离
 * 作者：北有喬木
 */
 function actBrow() {
    var boxWidth = 0;
    var conWidh = 0;
    var conliWidth = 0;
    var conliLen = 0;
    var step = 2;
    var change = 1;
    var boxScorl = 0;
    var timer = setInterval(browMove,50);
    boxWidth = $(window).width();
    conliLen = $('.brow-con ul li').length;
    conliWidth = $('.brow-con ul li').outerWidth();
    $('.brow-con ul').outerWidth(conliLen * conliWidth + 12*conliLen);
    conWidh = $('.brow-con ul').outerWidth();
    boxScorl = $('.brow-con').scrollLeft();
    $('.brow-left').click(function() {
        change = 1;
        browMove();
    })
    $('.brow-right').click(function() {
        change = -1;
        browMove();
    })
    function browMove() {
        if (change > 0) {
            boxScorl += step;
            if (boxScorl >= conWidh - boxWidth) {
                boxScorl = 0;
            };
        }
        if (change < 0) {
            boxScorl -= step;
            if (boxScorl <= 0) {
                boxScorl = conWidh - boxWidth;
            };
        };
        $('.brow-con').scrollLeft(boxScorl);
    }
    $('.brow-con ul').hover(function() {
        $('.brow-left, .brow-right').stop(true).fadeIn(2000);
    },function() {
        $('.brow-left, .brow-right').stop(true).fadeOut(2000);
    })
 }
 actBrow();
/*
 * 功能：活动推广场地：滑动效果、自定义滚动条
 * 参数：oldX 鼠标初始点击值
 *       nowDisX 滑动距离
 *       newX 鼠标当前位置
 *       liWidth 内容区长
 *       lilen 获取li个数
 * 作者：北有喬木
 */             
 function coopMove() {
    var liLen = 0;
    var liWidth = 0;
    var oldX = 0;
    var oldY = 0;
    var nowDisX = 0;
    var nowDisY = 0;
    var newX = 0;
    var newY = 0;

    liLen = $('.coop-con ul li').length;
    liWidth = $('.coop-con ul li').outerWidth();
    quotHeight = $('.quoted').outerHeight();
    newsHeight = $('.newscon').outerHeight();
    $('.coop-con ul').width(liLen * liWidth);
    $('.coop-scroll').mousedown(function(e) {
        oldX = e.clientX;
        nowDisX = $('.coop-scroll').offset().left - $('.coop-scrbox').offset().left;
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
            $('.coop-con').scrollLeft(nowX / maxX * ($('.coop-con').innerWidth()));
            $('.coop-scroll').css({
                "left": nowX + 'px'
            })
        })
    })
    $('.newscrol').mousedown(function(e) {
        oldY = e.clientY;
        nowDisY = $('.newscrol').offset().top - $('.newscrbox').offset().top;
        e.preventDefault();
        $(document).mousemove(function(e) {
            e.preventDefault();
            newY = e.clientY;
            var nowY = nowDisY + newY - oldY;
            var maxY = $('.newscrbox').outerHeight() - $('.newscrol').outerHeight(); 
            if (nowY <= 0) {
                nowY = 0;
            };
            if (nowY >= maxY) {
                nowY = maxY;
            };
            $('.newcons').scrollTop(nowY / maxY * ($('.newcons').innerHeight()));
            $('.newscrol').css({
                "top": nowY + 'px'
            })
        })
    })
    $(document).mouseup(function () {
        $(document).unbind("mousemove");
    })
 }
 coopMove();
 /*
 * 功能：活动与推广（最新动态）：图片渐变效果
 * 参数：imgIndex 初始索引值
 * 作者：北有喬木
 */	
 function proFade() {
 	var imgIndex = 0;
 	var timer = setInterval(proMove,2000);
 	function proMove() {
 		$('.acti-img img').eq(imgIndex).fadeIn(2000).siblings('img').fadeOut(2000);
 		$('.acti-img p span').eq(imgIndex).addClass('act-s').siblings().removeClass('act-s');
 		imgIndex ++;
 		if (imgIndex == $('.acti-img img').length) {
 			imgIndex = 0;
 		};
 	}
 	$('.acti-img p span').click(function() {
 		if (timer) {
 			clearInterval(timer);
 		};
 		imgIndex = $(this).index();
 		$('.acti-img img').eq(imgIndex).fadeIn(2000).siblings('img').fadeOut(2000);
 		$('.acti-img p span').eq(imgIndex).addClass('act-s').siblings().removeClass('act-s');
 		timer = setInterval(proMove,2000);
 	}) 
 }
 proFade();
 /*
  * 功能：会员首页：仿圆边进度效果
  *	参数：
  *	作者： 北有喬木
  *
  */
function cirMove() {
    $('.project li').hover(function() {
	        $(this).stop(true).animate({start: 90,end:180},{
	        	step:function(now,end) {
	        		$(this).find('.pro-right').css('transform', "rotate(" + now + "deg)");
	        		$(this).find('.pro-left').css('transform', "rotate(" + now + "deg)");
	       		}
	        },2000) 
	    },function() {
	    	$(this).stop(true).animate({start:180, end: 90},{
	        	step:function(now,end) {
	        		$(this).find('.pro-right').css('transform', "rotate(" + now + "deg)");
	        		$(this).find('.pro-left').css('transform', "rotate(" + now + "deg)");
	       		}
	        },2000) 
	    })
}
cirMove();
function ajaSle() {
    var con = document.getElementById('bracon');
    var texts = document.getElementById('enlist').children;
    var cons = con.children;
    var conData = null;
    for (var i = 0; i < texts.length; i++) { 
        texts[i].index = i;
        texts[i].onmouseover = function() {
            if (texts.innerHTML == '') {
                con.style.display = 'none';
            } else {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                conData = JSON.parse(xhr.responseText);
                console.log(JSON.parse(xhr.responseText));
                for (var i = 0; i < cons.length; i++) {
                    cons[i].innerHTML = conData.s[i];
                };
            }
            }
            xhr.open('get', "baidu.php?keyword=" + texts[this.index].innerHTML, true);
            xhr.send(null);
            con.style.display = "block";
        }
    };
}
ajaSle();
/*  
 * 功能：页面跳转效果
 * 参数：scroll 获取当前滚动条
 *       
 */
function aboTab() {
    var business = document.getElementById('business');
    $('.right').on('click', function(){
        var scroll = business.scrollTop;//获取当前滚动条
        console.log(scroll);
        $('.business').animate({
            "scrollTop":"+=314px"
        }, 100);
        if (scroll >= businesscon.offsetHeight - business.clientHeight) {
            $('.right').css({
                "display":"none"
            })
            $('.left').css({
                "display":"block"
            })
        }
        else {
            $('.right').css({
                "display":"block"
            })
            $('.left').css({
                "display":"block"
            })
        }
    })
    $('.left').on('click', function(){
        var scroll = business.scrollTop;
        $('.business').animate({
            "scrollTop":"-=314px"
        }, 100)
        if(scroll <= 0) {
            $('.left').css({
                "display": "none"
            })
            $('.right').css({
                "display":"block"
            })
        }
        else {
            $('left').css({
                "display": "block"
            })
            $('.right').css({
                "display":"block"
            })
        }   
    }) 
}aboTab();
function abcTab() {
    var manager = document.getElementById('manager');
    $('.right').on('click', function(){
        var scroll = manager.scrollTop;//获取当前滚动条
        console.log(scroll);
        $('.manager').animate({
            "scrollTop":"+=314px"
        }, 100);
        if (scroll >= managercon.offsetHeight - manager.clientHeight) {
            $('.right').css({
                "display":"none"
            })
            $('.left').css({
                "display":"block"
            })
        }
        else {
            $('.right').css({
                "display":"block"
            })
            $('.left').css({
                "display":"block"
            })
        }
    })
    $('.left').on('click', function(){
        var scroll = manager.scrollTop;
        $('.manager').animate({
            "scrollTop":"-=314px"
        }, 100)
        if(scroll <= 0) {
            $('.left').css({
                "display": "none"
            })
            $('.right').css({
                "display":"block"
            })
        }
        else {
            $('left').css({
                "display": "block"
            })
            $('.right').css({
                "display":"block"
            })
        }   
    }) 
}abcTab();
/*  
 * 功能：诚聘英才：背景图切换
 * 作者：福梁      
 */
function aboBut() {
    $('.tit-d div').on('click', function(){
        $(this).css({
            'background': "url(../images/au_14.png) 0 0 no-repeat"
        })
       $(this).siblings().css({
            'background': "url(../images/au_15.png) 0 0 no-repeat"
        })
    }) 
}
aboBut();
 /*
 * 功能： 主页：切换效果
 * 作者：北有喬木
 */
function indWeb() {
	$(".ind-nav p span, .sina").click(function() {
		$('.ind-nav p span em, .sina').css({
			"display":"block"
		})
		$('.sina-con').stop(true).animate({
			"margin-top":"0"
		},1000)
		$('.pic').css({
			"margin-left":"-280px"
		})
	})
	$(".pic-con img ").mouseover(function() {
		$('.sina-con').stop(true).animate({
			"margin-top":"644"
		},1000)
		$('.ind-nav p span em,.sina').css({
			"display":"none"
		})
		$('.pic').css({
			"margin-left":"0"
		})
		$(".ind-nav p em, .ind-webchat").css({
				"display":"none"
		})
	})
	$(".ind-nav p strong").click(function() {
		$(".ind-nav p strong em, .ind-webchat").css({
			"display":"block"
		})
	})
}
indWeb();
/*
 * 功能： 主页：大图渐变
 * 参数； imgIndex  索引值控制
 * 		  picNum    图片长度
 * 作者： 北有喬木
 */
function indPic() {
	var imgIndex = 0;
	var timer =null;
	var picNum = $('.pic-con a').length;
	timer = setInterval(move,2000)
	function move(){
		$('.pic-con a').eq(imgIndex).stop(true).fadeIn(2000).siblings().stop(true).fadeOut(2000);
		$('.plist span').eq(imgIndex).addClass('pshow').siblings().removeClass('pshow');
		imgIndex++;
		if (imgIndex == picNum) {
			imgIndex = 0;
		};
	}
	$('.plist span').on('click',function(){
		if (timer) {
			clearInterval(timer)
		};
		imgIndex = $(this).index();
		$(this).addClass('pshow').siblings().removeClass('pshow');
		$('.pic-con a').eq(imgIndex).stop(true).fadeIn(500).siblings().stop(true).fadeOut(500);
		timer = setInterval(move,2000);
	})
}
indPic();
/*0
 * 功能： 服务设施：hover效果
 *    
 * 作者： 福梁
 */
function us() {
    $('.project-ser li').hover(function() {
        $(this).css({
            'border-color':'#ffc976'
        })
        $('.project-ser span').eq($(this).index()).css({
            'color':'#fff'
        })
        $(this).siblings().css({
            'border-color':'#fff'
        })
    }, function() {
        $('.project-ser li').css({
            'border-color':'#fff'
        })
        $('.project-ser li span').css({
            'color':'#bca177'
        })
    })
}
us();

/*
 * 功能： 购物指南-新店开张：hover效果
 *	  
 * 作者： 福梁
 */
$('.store li').hover(function() {
    $(this).find('div').css({
        'display' : 'block',
        'animation' : 'sca 0.5s linear'
    })
    $('.store li div').siblings('div').css({
        'display' : 'none'
    })
}, function() {
    $(this).find('div').css({
        'display' : 'none'
    })
});

/*
 * 功能： VIP专区：会员申请
 *	  
 * 作者： 福梁
 */
function vipSen() {
	$('.gender div').on('click', function(){
	    $(this).css({
	        'background': 'url(../images/icos.png) -502px -725px no-repeat'
	    })
	    $(this).siblings('div').css({
	        'background': 'url(../images/icos.png) -502px -697px no-repeat'
	    })
	})
}
vipSen();