$(function() {
	$(window).resize(initFont);
	function initFont() {
		var htmlWidth = $(window).width();
		if (htmlWidth >= 960) {
			$('html').css({
				'font-size' : 24 + 'px'
			})
		} else {
			$('html').css({
				'font-size' : 36 / 960 * htmlWidth + 'px'
			})
		}
	}initFont();
}) 
/*
	*便利商家详情页
	*点击出现详细宝贝介绍
	*FL
 */ 
function produce() {
    var det = true;
    $(".det-product").click(function() {
        if(det == true) {
            $(".detimg").css({
                "display" : "block"
            })
            $(this).find("span").css({
                "background-position" : "15.75rem -79.9rem"
            })
            det = false;
        }
        else {
            $(".detimg").css({
                "display" : "none"
            })
            $(this).find("span").css({
                "background-position" : "15.75rem -81.8rem"
            })
            det = true;
        }
    })
}produce();
/*
	*便利商家选择尺寸、颜色
	*点击选择
	*FL
 */
function detSize() {
    var detbt = true;
    $(".det-bt strong").click(function() {
        if(detbt == true) {
            $(this).css({
                "border-color" : "#f25000"
            })
            $(this).siblings().css({
                "border-color" : "#c5c5c5"
            })
            $(this).addClass('detshow').siblings('strong').removeClass('detshow');
            detbt = false;
        }
        else {
            $(this).css({
                "border-color" : "#c5c5c5"
            })
            $(this).removeClass('detshow')
            detbt = true;
        }
    })
    $(".det-color strong").click(function() {
        if(detbt == true) {
            $(this).css({
                "border-color" : "#f25000"
            })
            $(this).addClass('detshow') 
            detbt = false;
        }
        else {
            $(this).css({
                "border-color" : "#c5c5c5"
            })
            $(this).removeClass('detshow')
            detbt = true;
        }
    })
}detSize();
/*
	*便利商家数量选择
	*加减产品数量
	*FL
 */
function detNum() {
    var shopNum = $(".det-select li").eq(1).text();
    $(".det-select li").eq(0).click(function() {
        if(shopNum == 0) {
            shopNum = 0;
        }
        else {
            shopNum--;
            $(".det-select li").eq(1).text(shopNum);
        }
    })
    $(".det-select li").eq(2).click(function() {
        shopNum++;
        $(".det-select li").eq(1).text(shopNum)
    })
}detNum();
//找对象 
$(".object-tab span").on("tap", function(){
	$(this).css({
		"-webkit-box-shadow": "inset 0 -2px #ff6600",
		"-moz-box-shadow": "inset 0 -2px #ff6600",
		"box-shadow": "inset 0 -2px #ff6600"
	})
	$(this).siblings().css({
		"-webkit-box-shadow": "inset 0 0 #ff6600",
		"-moz-box-shadow": "inset 0 0 #ff6600",
		"box-shadow": "inset 0 0 #ff6600"
	})
	$(".object-tabcon > div").eq($(this).index()).addClass("object-con").siblings().removeClass("object-con");
})
// 我的购物车
var btn = false;
function shopCar() {
	$('.own-con .shop-list dt span').on("tap", function(){
		if (btn == false) {
			$(this).css({
				"background": "url(../images/per_05.png)",
				"background-size": "1.46rem",
				"background-position-y": "-15.8rem"
			})
			btn = true;
		} else if (btn == true) {
			$(this).css({
				"background":" url(../images/per_05.png)",
				"background-size": "1.46rem",
				"background-position-y": "-18.5rem"
			})
			btn = false;
		}
	})
 	// $('.shop-list div span').eq(0).on("tap", function() {
 	// 	var num = $(this).siblings("strong").html();
 	// 	console.log(num);
 	// })
}
shopCar();
