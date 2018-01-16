$(function(){
	$("#header").load("header.html");
    $("#footer").load("footer.html");
    
    hashchange();
	$(window).on( 'hashchange', function(e){
		hashchange();
	});
    	  	
   	function hashchange(){
   		var indexHs = window.location.hash.substring(1);
    	if (indexHs == 1 || indexHs == 2 || indexHs == 3 || indexHs == 4) {
    		$(".banner").find("img").css("display","none").eq(indexHs - 1).css("display","block");
			$(".content_title").find("a").removeClass("active").eq(indexHs - 1).addClass("active");
       	 	$(".content_bottom").find(".bottom_list").css("display","none").eq(indexHs - 1).css("display","block");
    	}
   	}
   	
   		// left / right
	var xcImg = $(".jinggui_bigBox_ul").find("li").index();
	var xcAll = $(".jinggui_bigBox_ul").find("li").length;
	var xcLi_w = $(".jinggui_bigBox_ul").find("li").width() + 35;
	$(".jinggui_prev").click(function(){
		xcImg--;
		if(xcImg == -1){
			xcImg = 0;
		}
		$(".jinggui_next").find("img").attr("src","img/right_icon02.png");
		$(".jinggui_bigBox_ul").animate({left: -xcImg * xcLi_w},300,function(){
			if(xcImg == 0){
				$(".jinggui_prev").find("img").attr("src","img/left_icon01.png");
			}
		});
	})
	$(".jinggui_next").click(function(){
		xcImg++;
		if(xcImg == 4){
			xcImg = 3;
		}
//		console.log($(".xc_list_ul").css("left"));
		$(".jinggui_prev").find("img").attr("src","img/left_icon02.png");
		$(".jinggui_bigBox_ul").animate({left: -xcImg * xcLi_w},300,function(){
			if(xcImg == 3){
				$(".jinggui_next").find("img").attr("src","img/right_icon01.png");
			}
		});
	})
	//分类
//	$('.fenlei_content').filterizr({
//		animationDuration:0,
//	});
	$('.fenlei_ul li').on('click', function() {
		$(this).addClass('fenlei_active').siblings().removeClass('fenlei_active');
	});
	$(".fenlei_ul").find("#all").click(function(){
		$(".fenlei_content").find(".filtr-item").css("display","block");
	});
	$(".fenlei_ul").find("#list1").click(function(){
		$(".fenlei_content").find("#item2").css("display","none").siblings(".filtr-item").css("display","block");;
	})
	$(".fenlei_ul").find("#list2").click(function(){
		$(".fenlei_content").find("#item2").css("display","block").siblings(".filtr-item").css("display","none");
	})
	

	//点击每个产品
	$(".fenlei_content").delegate(".filtr-item", "click", function () {
		var listIndex = $(this).index();
//		window.location.assign('industry-list' + $(this).index() + '.html');
		window.location.assign("industry-list.html?IndustryDetail=" + listIndex);
	})
})