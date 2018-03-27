//公用js
$(function() {
	//初始化图片预览
	if($('body').find('img[data-preview-src]').length != 0) {
		mui.previewImage();
	}
	//切换选项卡高亮
	$('.nav').on('tap', '.mui-tab-item', function() {
		$(this).addClass('mui-active')
		$(this).siblings('a').removeClass('mui-active')
	})
	//中英文切换
	$('.yq-language').on('tap', function() {
		var fa = $(this).parent().parent()
		if($(this).text() == 'English') {
			fa.find('.usa').removeClass('mui-hidden')
			fa.find('.china').addClass('mui-hidden')
			$(this).text('中文')
		} else {
			fa.find('.usa').addClass('mui-hidden')
			fa.find('.china').removeClass('mui-hidden')
			$(this).text('English')
		}
	})
	//控制页面跳转（MUI阻止a标签跳转）
	$('nav').on('tap', 'a', function() {
		mui.openWindow($(this)[0].href)
	})
	$('a.mui-navigate-right').on('tap', function() {
		mui.openWindow($(this)[0].href)
	})
	$('a.details').on('tap', function() {
		mui.openWindow($(this)[0].href)
	})
	$('.map').on('tap',function(){
		mui.openWindow($(this)[0].href)
	})

})