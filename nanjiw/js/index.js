$(function() {
	function indexObj() {
		this.$con = $(".con");
		this.timer = null;
		this.init();
	}
	indexObj.prototype = {
		constructor: "indexObj",
		init: function() {
			this.$con.on("mouseenter mouseleave", ".big-img", $.proxy(this.starSlide, this));
			this.$con.on("mouseenter mouseleave", ".stars > div", $.proxy(this.starSportEle, this));
			this.$con.on("mouseenter mouseleave", ".peo-inf dl dt", $.proxy(this.proEle, this));
			this.$con.on("mouseenter mouseleave", ".dream-share", $.proxy(this.sharEle, this));
			this.$con.on("click", ".focus-hero", $.proxy(this.attentionEle, this));
		},
		// 星星模块下滑
		starSlide: function(e) {
			var _this = $(e.currentTarget);
			if (e.type == "mouseenter") {
				_this.stop(true).animate({
					"height" : "500px"
				}, 400)
			} else {
				_this.stop(true).animate({
					"height" : "300px"
				}, 400)
			}
		},
		// 星星模块闪动
		starSportEle: function(e) {
			var _this = $(e.currentTarget);
			var pic = 0;
			if (e.type == "mouseenter") {
				_this.children("span").removeClass("hide");
				this.timer = setInterval(function() {
					pic++;
					_this.css({
						"background-image" : "url('../images/big-star"+pic+".png')"
					})
					if (pic >= 2) {
						pic = 0;
					}
				}, 180);
			} else {
				 clearInterval(this.timer);
				_this.children("span").addClass("hide");
			}
		},
		// 个人头像模块
		proEle: function(e) {
			var _this = $(e.currentTarget);
			if (e.type == "mouseenter") {
				_this.children(".peo-detail-mes").removeClass("hide");
			} else {
				_this.children(".peo-detail-mes").addClass("hide");
			}
		},
		// 关注
		attentionEle: function(e) {
			var _this = $(e.currentTarget);
			_this.children("span").html("已关注");
		},
		// 分享
		sharEle: function(e) {
			var _this = $(e.currentTarget);
			if (e.type == "mouseenter") {
				_this.children(".link").removeClass("hide");
			} else {
				_this.children(".link").addClass("hide");
			}
		}
	}
	new indexObj();
})