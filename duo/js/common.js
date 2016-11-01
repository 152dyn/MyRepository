(window.onload = function() {
    window.onresize = function() {
        initFont();
    }
    function initFont() {
        var htmlWidth = document.body.clientWidth;
        if(htmlWidth >= 750) {
            document.documentElement.style.fontSize = 28 + 'px';
        } else {
            document.documentElement.style.fontSize = 28 / 750 * htmlWidth + 'px';
        }
    }initFont(); 
})();