/* 
* @Author: anchen
* @Date:   2016-05-18 10:29:06
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-18 21:15:03
*/
        var wrap = document.getElementById("map");
        var box = document.getElementById("big");
        var mapbigger = document.getElementById("mapbigger");
        var startBx = 0;
        var startBy = 0;
        var nowBx = 0;
        var nowBy = 0;
        var newBx = 0;
        var newBy = 0;
        wrap.onmousemove = function() {
            box.style.display = "block";
            mapbigger.style.display = "none";

        }
        wrap.onmouseout = function() {
            box.style.display = "none";
            mapbigger.style.display = "block";
        }
        wrap.onmouseover = function(e) {
            box.style.display = "block";
            startBx = box.getBoundingClientRect().left;
            startBy = box.getBoundingClientRect().top;
            startwx = wrap.getBoundingClientRect().left;
            startwy = wrap.getBoundingClientRect().top;
            document.onmousemove = function(e) {
                nowBx = e.clientX;
                nowBy = e.clientY;
                // console.log("e"+ nowBx);
                // console.log("c"+startBx);
                newBx = nowBx - startwx - box.offsetWidth/2;
                newBy = nowBy - startwy - box.offsetHeight/2;
                max = wrap.offsetWidth - box.offsetWidth;
                may = wrap.offsetHeight - box.offsetHeight;
                if (newBx <= 0) {
                    newBx = 0;
                };
                if (newBx >= max) {
                    newBx = max;
                };
                if (newBy <= 0) {
                    newBy = 0;
                };
                if (newBy >= may) {
                    newBy = may;
                };
                box.style.left = newBx + 'px';
                box.style.top = newBy + 'px';
                console.log(newBx);
                console.log(newBy);
                box.scrollLeft = newBx*2 + 52;
                box.scrollTop = newBy*2 + 37;
            }
        }
