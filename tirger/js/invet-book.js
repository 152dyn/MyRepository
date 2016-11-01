/* 
* @Author: anchen
* @Date:   2016-05-26 07:46:28
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-26 07:46:34
*/

/*
 * 功能： 会员手册，招商手册：翻页效果
 *        
 * 作者： 北有喬木
 */
//  控制上下页
function booBtn(){
    $('.book-btn p strong').eq(1).click(function() {
        $('.page').stop(true).animate({
            "width":"480px",
            "right":"480px"
        },1000)
    })
    $('.book-btn p strong').eq(0).click(function() {
        $('.page').stop(true).animate({
            "width":"0px",
            "right":"0px"
        },1000)
    })
}
booBtn();
var bok = document.getElementById("book");
var nextbtn = document.getElementById("nextbtn");
//  触发全屏
nextbtn.onclick = function() {
    launchFullscreen(bok); 
    bookWin();
}
function launchFullscreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
// 更改全屏后适应数值
function bookWin() {
    var windowWidth;
    var windowHeight;
    windowWidth = $(this).width();
    windowHeight = $(this).height();
    $('.book').height(windowHeight);
    $('.book img').height(windowHeight);
    $('.page img').height(windowHeight);
    $('.page').height(windowHeight);
    $('.book').width(windowWidth);
    $('.book img').width(windowWidth)
    $('.page img').width(windowWidth/2);
    $('.book p').css({
        "display":"none"
    })
//  全屏后键盘事件判断
    $(document).keyup(function(event){ 
        if(event.keyCode == 37){ 
            if ($('.book').width() == windowWidth) {
                    $('.page').stop(true).animate({
                        "width":windowWidth/2,
                        "right":windowWidth/2
                    },1000) 
            } else {
                $('.page').stop(true).animate({
                    "width":"490px",
                    "right":"490px"
                },1000)
            }
        } else if (event.keyCode == 39) {
            $('.page').stop(true).animate({
                "width":"0px",
                "right":"0px"
            },1000)
        } else {
            //  退出全屏
            exitFullscreen();
            picbok();
        }
    }); 
}
// 点击退出全屏
bok.onclick = function() {
    exitFullscreen();
    picbok();
}
//  恢复初始值
function picbok() {
    $('.book, .book img').css({
        "width":"980px",
        "height":"446px"
     })
    $('.page img').css({
        'width':"490px",
        "right":"0"
    })
    $('.page').css({
        "width":"0",
        "height":"446px"
    })
    $('.book p').css({
        "display":"block"
    })  
}
// 退出全屏
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}