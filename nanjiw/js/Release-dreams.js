$(function() {
    function addModule() {
        this.$parBox = $(".basic-inf");
        this.index = 0;
        this.init();
    };

    addModule.prototype = {
        constructor: 'addModule',
        init: function() {
            this.$parBox.on("click", ".save", $.proxy(this.nextEve, this));
            this.$parBox.on("click", ".sure", $.proxy(this.addLabelEve, this));
            this.$parBox.on("click", ".remove", $.proxy(this.delLabelEve, this));
            this.$parBox.on("mouseenter", ".thir li", $.proxy(this.delShow, this));
            this.$parBox.on("mouseleave", ".thir li", $.proxy(this.delClose, this));
            this.$parBox.on("input", ".essential", $.proxy(this.inputChange, this));
            this.$parBox.on("click", ".fifth strong", $.proxy(this.composingShow, this));
            this.$parBox.on("click", ".fifth ul li", $.proxy(this.composingEve, this));
        },
        // 标签删除元素显示
        delShow: function(e) {
            var $this = $(e.currentTarget);
            $this.children("span").removeClass("hide");
        },
        // 标签删除元素隐藏
        delClose: function(e) {
            var $this = $(e.currentTarget);
            $this.children("span").addClass("hide");
        },
        // 删除标签
        delLabelEve: function(e) {
            var $this = $(e.currentTarget);
            $this.parent().remove();
        },
        // 增加标签
        addLabelEve: function(e) {
            var $this = $(e.currentTarget);
            var labelLength = $(".thir li").length;
            if (labelLength >= 4) {
                alert("标签小于等于四个");
            } else {
                var val = $this.prev().val();
                $(".thir ul").append("<li>" + val + "<span class='remove hide'>X</span></li>")
            }
        },
        // 排版
        composingShow: function(e) {
            var $this = $(e.currentTarget);
            $this.siblings("ul").removeClass("hide");
        },
        //对齐
        composingEve: function(e) {
            var $this = $(e.currentTarget),
                index = $this.index();
            $this.parent("ul").addClass("hide");
            if (index == 0) {
                $(".con").css({
                    "text-align": "left"
                })
            } else if(index == 1) {
                $(".con").css({
                    "text-align": "center"
                })
            } else {
                $(".con").css({
                    "text-align": "right"
                })
            }
        },
        // 判断输入
        inputChange: function(e) {
            var $this = $(e.currentTarget);
            if ($this.val() == '') {
                $this.siblings(".erro").removeClass("hide");
            } else {
                $this.siblings(".erro").addClass("hide");
            }
        },
        // 判断信息是否全部填写完毕
        isPass: function() {
            var count = 0;
            $(".basic-inf > div:not('hide') .essential").each(function() {
                if ($(this).val() != '') {
                    count++;
                } else {
                    $(this).siblings(".erro").removeClass("hide");
                }
            })
            return count == $(".basic-inf > div:not('hide') .essential").length;
        },
        // 保存下一步
        nextEve: function(e) {
            var $this = $(e.currentTarget);
            var bool = this.isPass();
            if (bool) {
                this.index++;
                $(".nava").css({
                    "background": "url(../images/merge.png) no-repeat -168px " + (-888 - 200 * this.index) + "px"
                })
                $this.parent().addClass("hide").next().removeClass("hide");
            } else {

            }
        },
    }
    new addModule();
})
