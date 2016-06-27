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

function shopCar() {
	$('.own-con .shop-list dt span').on("tap", function(){
		if (this.className != "list-btn") {
			this.className = "list-btn";
            $(this).parent().next().find("p").eq(3).find("strong").addClass("money");
		} else if (this.className == "list-btn") {
			this.className = "";
		}
	})
 	$('.reduce').on("tap", function() {
        var num = $(this).siblings("strong").html();
        if (num == 0) {
            num = 0;
        }else {
            num--;
        }
 		$(this).siblings("strong").html(num);
 	})
    $('.add').on("tap", function() {
        var num = $(this).siblings("strong").html();
        num++;
        $(this).siblings("strong").html(num);
    })
    $(".shop-buy p").find("span").on("tap",function() {
        if (this.className == "buy-show") {
            this.className = "";
        }else if (this.className == "") {
            this.className = "buy-show";
        }
    })
    $(".shop-pay span").eq(0).on("tap", function(){
        if (this.id == "all-select") {
            this.id = "";
            $('.shop-list dt span').removeClass("list-btn");
        }else if (this.id == "") {
            this.id = "all-select";
            $('.shop-list dt span').addClass("list-btn");
        }
    })
    // 人民币换算
}
shopCar();

// 配送方式
$('.sent-cona p, .sent-conb p').on("tap", function() {
    $(this).addClass('sent-select').siblings().removeClass('sent-select');
})
// 发票留言 
$('.speak-style p span').on("tap", function() {
    $(this).addClass('speak-select').siblings().removeClass('speak-select');
})