/*
* @Author: hdx
* @Date:   2018-10-15 16:34:13
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-27 17:48:55
*/
$(function() {
	$(".ad li a span").click(function() {
		$('.ad li a').removeClass('activ-bor');
        $(this).parent().addClass('activ-bor');
	});
	$(".aul li a span").click(function() {
		$('.aul li a').removeClass('activ-ico');
        $(this).parent().addClass('activ-ico');
	});
	$(".ac li a span").click(function() {
		$('.ac li a').removeClass('botm-ship');
        $(this).parent().addClass('botm-ship');
	});
	$(".pay-l > .pitch").click(function() {
		$('.pay-l > .pitch').removeClass('payactiv');
		$(this).addClass('payactiv');
	});
	$(".sel-list > select").click(function() {
		$('.sel-list > select').removeClass('kh-font');
		$(this).addClass('kh-font');
	});

	// 导航条 悬挂
	$(window).scroll(function() {
		var $header_top = $('.d-header').height();
		var $footer_botm = $('.d-footer').height();
		var $docm = $(document).scrollTop();
		if($docm > 0){
			$(".d-header").css({
				"position":"fixed",
				"z-index":999,
				"top":0
			});
		}
		else if($docm > 0 || $docm < $footer_botm){
			$(".d-footer").css({
				"position":"fixed",
				"z-index":999,
				"bootm":0,
			});
			$(".d-header").css({
				"position":"relative",
			});
		}
		else{
			$(".d-header").css({
				"position":"relative",
			});
			$(".d-footer").css({
				"position":"relative"
			});
		}
	});

	//字数限制 room-info.html
	$("#textar").on("input propertychange", function () {
		var $this = $(this),
		_val = $this.val(),
		count = "";
		if(_val.length > 500) {
			$this.val(_val.substring(0, 500));
		}
		// count = 500 - $this.val().length;  // 500/500
		count = 0 + $this.val().length;  // 0/500
		$("#text-count").text(count);
	});

});


