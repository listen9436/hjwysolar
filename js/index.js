$(function(){
	
    $("#header").load("header.html");
    $("#footer").load("footer.html");
	
//	var allimg = $(".banner_box").find("img").length;
//	var indexImg = $(".banner_box").find("img").index();
	//左右滚动式
//	var timer = setInterval(next,3000);
//	function next(){
//		indexImg++;
//		if(indexImg == allimg){
//			indexImg = 0;
////			$(".banner").find(".banner_box").css("left",0);
//		}
//		$(".banner").find(".banner_box").animate({left:-indexImg+"00%"},300);
//	}

	//渐隐式
	var allimg = $(".banner_box").find("li").length;
	var indexDian = 0;
	var timer = null;
	$(".banner_list").find("li").click(function(){
		indexDian = $(this).index();
		$(this).addClass("bannerList_active").siblings().removeClass("bannerList_active");
		$(".banner_box").find("li").eq(indexDian).fadeIn(600).siblings("li").fadeOut(600);
	});
	timer = setInterval(next,3000);
	function next(){
		indexDian++;
		if(indexDian == allimg){
			indexDian = 0;
		}
		$(".banner_list").find("li").eq(indexDian).addClass("bannerList_active").siblings().removeClass("bannerList_active");
		$(".banner_box").find("li").eq(indexDian).fadeIn(600).siblings("li").fadeOut(600);
	}
	$(".banner_list").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(next,3000);
	});
	
	// left / right
//	var xcImg = $(".xc_list_ul").find("li").index();
//	var xcAll = $(".xc_list_ul").find("li").length;
//	var xcLi_w = $(".xc_list_ul").find("li").width() + 10;
//	$(".xc_prev").click(function(){
//		xcImg--;
//		if(xcImg == -1){
//			xcImg = 0;
//		}
//		$(".xc_next").find("img").attr("src","img/right_icon2.png");
//		$(".xc_list_ul").animate({left: -xcImg * xcLi_w},300,function(){
//			if(xcImg == 0){
//				$(".xc_prev").find("img").attr("src","img/left_icon1.png");
//			}
//		});
//	})
//	$(".xc_next").click(function(){
//		xcImg++;
//		if(xcImg == 4){
//			xcImg = 3;
//		}
////		console.log($(".xc_list_ul").css("left"));
//		$(".xc_prev").find("img").attr("src","img/left_icon2.png");
//		$(".xc_list_ul").animate({left: -xcImg * xcLi_w},300,function(){
//			if(xcImg == 3){
//				$(".xc_next").find("img").attr("src","img/right_icon1.png");
//			}
//		});
//	})

	// 无缝滚动
	
	var run = 0;
	var xcAll = $(".xc_list_ul").find("li").length;
	var xcLi_w = $(".xc_list_ul").find("li").width() + 10;
	var sc_move = xcAll * xcLi_w;
	function move(){
		run --;
		if(run < -sc_move / 2){
			run = 0;
		}
		$(".xc_list_ul").css({left:run});
	}
	var xc_timer = setInterval(move,10);
	$(".xianchang_box").hover(function(){
		clearInterval(xc_timer);
	},function(){
		xc_timer = setInterval(move,10);
	});
})
