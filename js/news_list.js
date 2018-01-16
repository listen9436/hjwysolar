$(function(){
	$("#header").load("header.html");
	$("#footer").load("footer.html");
	
    //获取页面url传过来的参数
    function getUrlParams(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return r[2];
        else
            return "";
    }
    //接收URL中的参数id   (数据坐标，而非ID)
    var id = getUrlParams('NewsDetail');
//  console.log('id:' + id);
	var id2 = parseInt(id)-1;
	var id3 = parseInt(id)+1;

       $.ajax({
       	type:"get",
       	url:"js/news.json",
       	dataType:"JSON",
       	success:function(data){
//     		console.log(data);
			var dataS = data.length;
			
	       	if(id2 == -1){
	       		$("#prev_new").text("已无更多新闻。");
	       		$("#next_new").text(data[id3].TITLE);
	       		$("#prev_new").click(function(){
					window.location.assign("news_list.html?NewsDetail=" + id);
				});
	       	}
	       	if(id3 == dataS){
	       		$("#next_new").text("已无更多新闻。");
	       		$("#prev_new").text(data[id2].TITLE);
	       		$("#next_new").click(function(){
					window.location.assign("news_list.html?NewsDetail=" + id);
				});
	       	}
       		$("#news_title").text(data[id].TITLE);
       		$("#news_date").text(data[id].DATE);
       		$("#news_content").text(data[id].CONTENT);
       		$("#prev_new").text(data[id2].TITLE);
       		$("#next_new").text(data[id3].TITLE);
       	}
       })
    $("#prev_new").click(function(){
		window.location.assign("news_list.html?NewsDetail=" + id2);
	});
	$("#next_new").click(function(){
		window.location.assign("news_list.html?NewsDetail=" + id3);
	});
})
