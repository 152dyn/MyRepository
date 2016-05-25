/* 
* @Author: anchen
* @Date:   2016-05-20 14:41:26
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-20 15:07:02
*/

$('.gender div').on('click', function(){
    $(this).css({
        'background': 'url(../images/icos.png) -502px -725px no-repeat'
    })
    $(this).siblings('div').css({
        'background': 'url(../images/icos.png) -502px -697px no-repeat'
    })
})