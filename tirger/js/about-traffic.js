/* 
* @Author: anchen
* @Date:   2016-05-18 10:29:06
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-26 08:19:50
/*
 * 功能： 交通指引：地图放大效果
 * 参数： startBx : box X横距初始
 *        startBy : box Y纵距初始
 *        nowBx ：初始鼠标横坐标
 *        nowBy ：初始鼠标纵坐标
 *        newBx ：当前鼠标横坐标
 *        newBy ：当前鼠标横坐标
 *        max   : x临界值
 *        may   : y临界值
 *  作者：北有喬木
 */
// function mapBig(){
//         var wrap = document.getElementById("map");
//         var box = document.getElementById("bigb");
//         var mapbigger = document.getElementById("mapbigger");
//         var startBx = 0;
//         var startBy = 0;
//         var nowBx = 0;
//         var nowBy = 0;
//         var newBx = 0;
//         var newBy = 0;
//         wrap.onmousemove = function() {
//             box.style.display = "block";
//             mapbigger.style.display = "none";

//         }
//         wrap.onmouseout = function() {
//             box.style.display = "none";
//             mapbigger.style.display = "block";
//         }
//         wrap.onmouseover = function(e) {
//             box.style.display = "block";
//             startBx = box.getBoundingClientRect().left;
//             startBy = box.getBoundingClientRect().top;
//             startwx = wrap.getBoundingClientRect().left;
//             startwy = wrap.getBoundingClientRect().top;
//             document.onmousemove = function(e) {
//                 nowBx = e.clientX;
//                 nowBy = e.clientY;
//                 newBx = nowBx - startwx - box.offsetWidth/2;
//                 newBy = nowBy - startwy - box.offsetHeight/2;
//                 max = wrap.offsetWidth - box.offsetWidth;
//                 may = wrap.offsetHeight - box.offsetHeight;
//                 if (newBx <= 0) {
//                     newBx = -10;
//                 };
//                 if (newBx >= max) {
//                     newBx = max;
//                 };
//                 if (newBy <= 0) {
//                     newBy = -10;
//                 };
//                 if (newBy >= may) {
//                     newBy = may;
//                 };
//                 box.style.left = newBx + 'px';
//                 box.style.top = newBy + 'px';
//                 box.scrollLeft = newBx*2 + 52;
//                 box.scrollTop = newBy*2 + 37;
//             }
//         }
// }
// mapBig();
$('.mapbigger').on("click",function(){
    $('.mapbig').css({
        "display":"block"
    })
})
$('.mapbig-out').on("click",function(){
    $('.mapbig').css({
        "display":"none"
    })
})
// 利用JSONP解决跨域
        // $.ajax({
        //     url:'http://api.map.baidu.com/location/ip?ak=6G4ogLYZWt4jWtReCeHzmMQ4yiMm67sx&ip=&coor=bd09ll',
        //     type: 'get',
        //     dataType: 'jsonp',
        //     jsonp: 'callback',
        //     success: function (data) {
        //         var datax = data.content.point.x;
        //         var datay = data.content.point.y;
                var datax = 113.690288;
                var datay = 22.819548;
                $.ajax({
                    url:'http://api.map.baidu.com/geoconv/v1/?coords=' + datax + ',' + datay + '&from=3&to=5&ak=6G4ogLYZWt4jWtReCeHzmMQ4yiMm67sx',
                    type: 'get',
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success: function(translate) {
                        var map = new BMap.Map("map");          // 创建地图实例  
                        var point = new BMap.Point(translate.result[0].x, translate.result[0].y);  // 创建点坐标  
                        map.centerAndZoom(point, 14);                 // 初始化地图，设置中心点坐标和地图级别 
                        window.setTimeout(function(){  
                            map.panTo(new BMap.Point(translate.result[0].x, translate.result[0].y));    
                        }, 2000);
                        var marker = new BMap.Marker(point);        // 创建标注    
                        map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
                        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
                    }
                })
        //     }
        // })