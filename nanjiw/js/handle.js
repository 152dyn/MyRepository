$(function(){
	function handle() {
		this.$popup = $(".popup");
		this.$btns = $(".btns");
		this.$report = $(".report");
		this.init();
	}

	handle.prototype = {
		constructor: "handle",
		init: function() {
			this.$popup.on("click", ".add-friend", $.proxy(this.addEve, this));//添加好友
			this.$popup.on("click", ".message", $.proxy(this.messageEve, this));//私信
			this.$popup.on("click", ".gift", $.proxy(this.giftEve, this));//送礼物
			this.$popup.on("click", ".user", $.proxy(this.reportEve, this));//举报
			this.$btns.on("click", ".sure", $.proxy(this.submitEve, this));//确定
			this.$btns.on("click", ".cancel", $.proxy(this.cancelEve, this));//取消
			this.$report.on("click", ".check span", $.proxy(this.selectEve, this));//举报勾选
		},
		addEve: function() {
			$(".mask").removeClass("hide").children(".add-mask").removeClass("hide");
		},
		messageEve: function() {
			$(".mask").removeClass("hide").children(".messages").removeClass("hide");
		},
		giftEve: function() {
			$(".mask").removeClass("hide").children(".gift-mask").removeClass("hide");
		},
		reportEve: function() {
			$(".mask").removeClass("hide").children(".report").removeClass("hide");
		},
		submitEve: function(e) {
			var $this = $(e.currentTarget),
				doType = $this.attr("name");
			$(".mask").addClass("hide").children().addClass("hide");
			// 留着以后触发事件
			switch(doType) {
				case "report": 
					console.log("举报");
					break;
				case "message":
					console.log("发送私信");
					break;
				case "friend":
					console.log("好友验证");
			}
		},
		cancelEve: function() {
			$(".mask").addClass("hide").children().addClass("hide");
		},
		selectEve: function(e) {
			var $this = $(e.currentTarget);
			$this.toggleClass("select-yes");
		},
		// 举报结束后
		reportSubmit: function() {

		}
	}
	new handle();
})