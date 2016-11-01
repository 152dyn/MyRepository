$(document).ready(function(){
    $(".allies-nav h2").on("click", function(){
        $(this).addClass('allies-now').siblings().removeClass('allies-now');
        if($(this).index() == 1) {
            $(".bottom-border").animate({
               "marginLeft" : "50%"
            });
            $(".allies-list").css({
                "display" : "none"
            })
            $(".allies-ranking").css({
                "display" : "block"
            })
        } else {
            $(".bottom-border").animate({
               "marginLeft" : "0"
            });
            $(".allies-list").css({
                "display" : "block"
            })
            $(".allies-ranking").css({
                "display" : "none"
            })
        }
    })
});