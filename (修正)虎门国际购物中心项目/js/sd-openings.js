/* 
* @Author: anchen
* @Date:   2016-05-22 17:40:42
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-22 17:52:20
*/
$('.store li').hover(function() {
    $(this).find('div').css({
        'display' : 'block'
    })
    $('.store li div').siblings('div').css({
        'display' : 'none'
    })
}, function() {
    $(this).find('div').css({
        'display' : 'none'
    })
    // $('.store li div').siblings('div').css({
    //     'display' : 'none'
    // })
});