$(function(){
//	$("#header").load("header.html");
//  $("#footer").load("footer.html");

	$(".nav_ul_li").hover(function() {
		$(this).find(".nav_li_list").stop().slideDown(300);
	}, function() {
		$(".nav_ul_li").find(".nav_li_list").stop().slideUp(200);
	});
	
	//获取id，跳转详情页	
	$(".news_content").find(".news_box").click(function(){
		var listIndex = $(this).index();
//		$.ajax({
//			type:"get",
//			url:"js/news.json",
//			dataType:'json',
//			async:true,
//			success:function(data){
//				console.log(data);
//				console.log(data[listIndex].ID);
				window.location.assign("news_list.html?NewsDetail=" + listIndex);
//			}
//		});
	})
	
	//pagination
	$("#fenye").pagination({  
	    css: 'css-2',
	    //可选，总页数    
	    totalPage: 3, //可选，展示页码数量，默认5个页码数量 
//	    showPageNum: 4, //可选，首页按钮展示文本，默认显示文本为首页
	    firstPage: '<<首页', //可选，上一页按钮展示文本，默认显示文本为上一页   
	    previousPage: '<', //可选，下一页按钮展示文本，默认显示文本为下一页   
	    nextPage: '>', //可选，尾页按钮展示文本，默认显示文本为尾页  
	    lastPage: '末页>>', //可选，跳至展示文本，默认显示文本为跳至    
	    isShowFL: true, //可选，是否展示每页N条下拉框，默认true
	    isShowPageSizeOpt: false, //可选，是否展示跳到指定页数，默认true   
	    isShowSkip: false, //可选，是否展示刷新，默认true   
	    isShowRefresh: false, //可选，是否展示共{}页，默认true   
	    isShowTotalPage: false, //可选，是否重新设置当前页码及总页数，当请求服务器返回数据时，默认false   
	    isResetPage: false, //必选，回掉函数，返回参数：第一个参数为页码，第二个参数为每页显示N条    
	    callBack: function(currPage, pageSize) {
        	console.log('currPage:' + currPage + '     pageSize:' + pageSize);
        	if(currPage == 1){
        		$(".news_content").find(".news_box").addClass("news_none");
        		$(".news_content").find(".newOne").removeClass("news_none");
        	}else if(currPage == 2){
        		$(".news_content").find(".news_box").addClass("news_none");
        		$(".news_content").find(".newTwo").removeClass("news_none");
        	}else if(currPage == 3){
        		$(".news_content").find(".news_box").addClass("news_none");
        		$(".news_content").find(".newThree").removeClass("news_none");
        	}
    	}
	});
})