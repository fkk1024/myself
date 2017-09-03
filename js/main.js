jQuery(document).ready(function($) {
   'use strict';

	// var windowHeight = $(window).height();
	// var windowWidth = $(window).width();

	// Nav导航，以取消
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 500);
	        return false;
	      }
	    }
	});

    $(".menu-icon").click(function(e) {
    	if ($('.menu').hasClass("visuallyhidden")) {
			$('.menu').removeClass("visuallyhidden");
			$('.menu-icon').addClass("close");
		} else {
			$('.menu').addClass("visuallyhidden");
			$('.menu-icon').removeClass("close");
		}
    });

    $(".menu li a").click(function(e) {
    	if ($('.menu').hasClass("visuallyhidden")) {
			$('.menu').removeClass("visuallyhidden");
			$('.menu-icon').addClass("close");
		} else {
			$('.menu').addClass("visuallyhidden");
			$('.menu-icon').removeClass("close");
		}
    });
	// Nav

	// 工作经历
	$(".work-item").hover(function(e){
		$(this).children('.work-item-inside').addClass("visuallyshowed");
	}, function(){ 
		$(this).children('.work-item-inside').removeClass("visuallyshowed");
	});

	// Skrollr · Mobile NONE
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
			beforerender: function(data) {
				return data.curTop > data.lastTop;
			}        
        	
	    });
	}
	// Skrollr

});

// 延时显示h1和h2等字体
$(window).load(function() {

	fixSizes();
	$(".loader").delay(500).fadeOut('slow');
	$("body").css("overflow", "auto");
	$(".home-title").removeClass("jiji");
	$(".menu-icon").removeClass("jiji");
	
});


$(window).resize(function() {
	fixSizes();
});

function fixSizes() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$("#home").css('height', windowHeight);
	$(".home-title").each(function() {
		$(this).css('padding-top', ($(this).parent().height() - $(this).height()) / 2);
	});
	$(".work-item-inside-content").each(function() {
		$(this).css('margin-top', ($(this).parent().height() - $(this).height()) / 2);
	});
}

// 联系方式切换
//$(()=>{
	$("#contact .social").on("click",".iconfont",function(){
		var index=$(this).index();
		var data=[];
		var C=$("#showContainer");//取容器               
		data[0]="<img src='img/我的微信.jpg' style='width:150px;'>";
		data[1]="<p>手机：15958119316</p>";
		data[2]="<p>GitHub项目地址:https://github.com/fkk1024</p>";
		// data[3]="<iframe src="map.html"></iframe>";
		console.log($(this).index());
		if (index===3) {
//			C.html("<div id='map'></div>");
//			let h='600';
//			// let w=window.screen.width;
//			var el=$("#map");
//			el.css({
//				width:'100%',
//				height:h+'px'
//			})
//			// el.style.width=w+'px';
//			// el.style.height=h+'px';
//			// }
//			// window.onload=a;
//			var map = new AMap.Map('#map',{
//			    zoom: 16,
//			    scrollWheel:true,
//			    center: [120.208732,30.166941]
//			});
//			var marker = new AMap.Marker({
//			    position: [120.208732,30.166941],//marker所在的位置
//			    map:map//创建时直接赋予map属性
//			});
//			marker.setMap(map);
//			//监听地图的click事件，点击地图，允许鼠标滚轮缩小或放大地图
//	                var clickEventListener = map.on('click', function() {
//	                map.setStatus({scrollWheel:true});
//	            });
//	            //监听地图的mouseout事件，鼠标移出地图区域，鼠标滚轮缩小或放大地图功能取消
//	            var mouseOutEventListener = map.on('mouseout',function(){
//	            map.setStatus({scrollWheel:false});
//	            });
//			// 工具控件
//			AMap.plugin(['AMap.ToolBar','AMap.MapType','AMap.Geolocation'],function(){
//			    //创建并添加工具条控件
//			    var toolBar = new AMap.ToolBar();
//			    var Geolocation = new AMap.Geolocation();
//			    var mapType = new AMap.MapType();
//			    map.addControl(toolBar);
//			    // map.addControl(mapType);
//			    map.addControl(Geolocation);
//			})
//			 var info = new AMap.InfoWindow({
//		        content: '<div class="title">现居地址：滨江区</div><div class="content">'+
//		                '白马湖小区-白鹤苑<br/>',
//		        offset:new AMap.Pixel(0,-28),
//		        size:new AMap.Size(200,0)
//		    })
//		    info.open(map,marker.getPosition())
//		    $('#contact').css({
//				'paddingBottom':'10px',
//				'textAlign': 'center',
//			}).children().find('#showContainer').css({
//				'marginTop':'20px',
//				'height':'600px'
//			})
		}else{
			if (C.html()!=='') {
				C.html('');
			}
			$('#showContainer').html(data[index]);
			$('#contact').css({
				'textAlign': 'center',
				'paddingBottom':'10px'
			}).children().find('#showContainer').css({
				'marginTop':'20px',
				'height':'220px'
			}).children().css({
				'height':'200px',
				'lineHeight':'200px'
			})
		}
	})
//})