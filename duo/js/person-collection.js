

$('.collec-tit > span').on('touchstart', function() {
	personTab('.collec-tit > span', 'collec-line', '.collec-con > div')
})
$('.per-Ifmtit > span').on('touchstart', function() {
	personTab('.per-Ifmtit > span', 'Ifm-sele', '.per-Ifmcon > div')
})
$('.per-cirtit > span').on('touchstart', function() {
	personTab('.per-cirtit > span', 'cir-sele', '.circle-con > div')
})
$('.list-head > span').on('touchstart', function() {
	personTab('.list-head > span', 'list-sele', '.list-content > div')
})
function personTab(perele, Class, percon) {
	$(perele).on('touchend', function() {
		var inde = $(this).index();
		$(this).addClass(Class);
		$(this).siblings().removeClass(Class);
		$(percon).eq(inde).css({
			'display' : 'block'
		})
		$(percon).eq(inde).siblings().css({
			'display' : 'none'
		})
		console.log(inde)
	})
}