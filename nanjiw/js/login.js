// 个人菜单
(function() {
	function Login() {
		this.$log = $(".header");
		this.$logTab = $(".login");
		this.init();
	}
	Login.prototype = {
		constructor: "Login",

		init: function() {
			this.$log.on("click", ".login-btn", $.proxy(this.loginEve, this));
			this.$log.on("click", ".register-btn", $.proxy(this.registerEve, this));
			this.$log.on("mouseenter mouseleave", ".head-menu", $.proxy(this.slideShow, this));
			this.$log.on("click", ".menu-resets", $.proxy(this.closeLoginEve, this));
			this.$logTab.on("click", ".log-enter", $.proxy(this.loginEve, this));
			this.$logTab.on("click", ".log-enroll", $.proxy(this.registerEve, this));
			this.$logTab.on("click", ".tit span", $.proxy(this.logTabEve, this));
			this.$logTab.on("click", ".en-titi span", $.proxy(this.regTabEve, this));
			this.$logTab.on("click", ".close", $.proxy(this.closeEve, this));
			this.$logTab.on("click", ".log-check", $.proxy(this.remPwdEve, this));
			this.$logTab.on("click", ".submit", $.proxy(this.loginBtn, this));
		},
		// 登录
		loginEve: function() {
			$(".mask").removeClass("hide").children(".login").removeClass("hide");
			$(".register").removeClass("hide").siblings(".enroll").addClass("hide");
			$(".login .tit span").eq(0).addClass("show").siblings().removeClass("show");
		},
		// 注册
		registerEve: function() {
			$(".mask").removeClass("hide").children(".login").removeClass("hide");
			$(".enroll").removeClass("hide").siblings().addClass("hide");
			$(".login .tit span").eq(1).addClass("show").siblings().removeClass("show");
		},
		// 登录注册tab切换
		logTabEve: function(e) {
			var $this = $(e.currentTarget);
			var index = $this.index();
			if (index == 0) {
				this.loginEve();					
			} else {
				this.registerEve();
			}
		},
		// 注册方式tab切换
		regTabEve: function(e) {
			var $this = $(e.currentTarget);
			var index = $this.index();
			$(".en-titi span").eq(index).addClass("enroll-sle").siblings("span").removeClass("enroll-sle");
			$(".en-tab > div").eq(index).removeClass("hide").siblings().addClass("hide");
			$(".en-triangle").css({
				left: 183 * index + 84
			});
		},
		// 关闭	
		closeEve: function() {
			$(".mask").addClass("hide").children(".login").addClass("hide");
		},
		// 记住密码
		remPwdEve: function(e) {
			var $this = $(e.currentTarget);
			$this.toggleClass("rem-pwd");
		},
		// 登录
		loginBtn: function() {
			var loginInfo = JSON.parse(this.FORM_validate()),
				inputUser = $(".log-email").val(),
				inputPwd = $(".log-pwd").val();
			console.log(loginInfo);
			if (loginInfo.user == inputUser && loginInfo.password == inputPwd) {
				$(".mask").addClass("hide");
				$(".head-register").addClass("hide");
				$(".head-menu").removeClass("hide");
			} else {
				alert("账号或密码错误");
			}
		},
		// 账号密码
		FORM_validate: function() {
			var xhr = $.ajax({
				url: "login.json",
				async: false
			}).responseText;
			return xhr;
		},
		// 个人菜单显示/隐藏
		slideShow: function(e) {
			if (e.type == "mouseenter") {
				$(".peo-menu").slideDown();
			} else {

				$(".peo-menu").slideUp();
			}
		},
		// 退出登录
		closeLoginEve: function() {
			$(".head-menu").addClass("hide").siblings(".head-register").removeClass("hide");
		}
	}
	new Login();
})();