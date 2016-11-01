var btns = document.getElementById('btn').children;
var img = document.getElementById('con').children;
var imgsWidth = 1000;
var timer = null;
var num = 0;var imgL = $("#con img").length;
for (var i = 0; i < imgL; i++) {
    $("#btn").append('<span></span>');
}
var num = 0;
$("#btn span").eq(num).css({
    "background" : "#ffe153"
})
$("#btn span").on("click", function() {
    clearInterval(imgTime);
    num = $(this).index();
    imgMove();
       imgTime = setInterval(function() {
            num++;
            if (num >= 5) {
               num = 0; 
            }
            imgMove();
        }, 3000);
})
var imgTime = setInterval(function() {
    num++;
    if (num >= 5) {
       num = 0; 
    }
    imgMove();
}, 3000);

function imgMove() {
    $("#btn span").eq(num).css({
        "background" : "#ffe153"
    }).siblings().css({
       "background" : "#09c5bc"
    })
    $("#con").animate({
        "left" : -num * 1000
    }, 1000)
}

$('.button').on('mouseover', function() {
    $(this).parent().css({
        'display' : 'none'
    }).siblings('.sel').css({
        'display' : 'block'
    })
})

$('.sel').on('mouseleave', function() {
    $(this).css({
        'display' : 'none'
    }).siblings('div').css({
        'display' : 'block'
    })
})

$(document).on('click', function() {
    $('.drop-down li').each(function() {
        $(this)[0].isSel = true;
    })
     $('.drop-down li').children('div').css({
            'display' : 'none'
    })
})
$('.drop-down  li').on('click', function(e) {
    e.stopPropagation();
    window.event.cancelBubble = true;
    window.event.returnValue = false;
    $(this).siblings().children('div').css({
        'display' : 'none'
   })
    if(this.isSel == false) {
        $(this).children('div').css({
            'display' : 'none'
        })
        this.isSel = true;
    } else{
         $(this).children('div').css({
            'display' : 'block'
        })
        $(this).siblings('li').each(function(){
            $(this)[0].isSel = true;
        })
        this.isSel = false;
    }
        
})

$('.drop-down li p').on('click', function() {
    var now = $(this).parent().siblings('h3').html();
    $(this).parent().siblings('h3').html($(this).html());
    $(this).html(now);
    
})

$('.share').on('click', function() {
    if(this.isClick == false) {
        $(this).parents().siblings('.link').css({
            "display" : "none"
        })
        this.isClick = true;
    } else {
        $(this).parents().siblings('.link').css({
            'display' : 'block'
        })
        $(this).siblings('.share').each(function(){
            $(this)[0].isClick = true;
        })
        this.isClick = false;
    }
})

