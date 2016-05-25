/* 
* @Author: anchen
* @Date:   2016-05-18 10:18:22
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-19 21:21:55
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