$(document).ready(function(){
    var  judey = true;
    $(".index-a").on("click",function() {
        if(judey) {
            $(".left").animate({
                "left": "80%",
                "height": "47.68rem"
            });
            $(".left").css({
                "position" : "fixed"
            })
            $("header,footer").animate({
                "left": "80%"
            });
            $(".wrap").css({
                "overflow": "visible"
            })
            judey = false;
        } else {
            $(".left").animate({
                "left": "0",
                "height": "110.71rem"
            });
            $(".left").css({
                "position" : "absolute"
            })
            $("header,footer").animate({
                "left": "0"
            });
            $(".wrap").css({
                "overflow": "visible"
            })
            judey = true;
        }
    })
});