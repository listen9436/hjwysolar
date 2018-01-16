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
    
   	//接收url中的参数
   	var id = getUrlParams("IndustryDetail");
// 	console.log("id:" + id);
   	
   	$.ajax({
   		type:"get",
   		url:"js/xiangqing.json",
   		dataType:"json",
   		async:true,
   		success:function(data){
// 			console.log(data);
			$(".list_left").html('<img src=' + data[id].PHOTO + '/>');
			$("#detail_h").text(data[id].NAME);
			$("#detail_a1").text(data[id].SIZE);
			$("#detail_a2").text(data[id].CONFIGURATIONS);
			$("#detail_a3").text(data[id].DETAIL1);
			$("#detail_p1").text(data[id].DETAIL2);
			$("#detail_p2").text(data[id].DETAIL3);
			$("#detail_p3").text(data[id].DETAIL4);
			$("#detail_p4").text(data[id].DETAIL5);
			$("#detail_p5").text(data[id].DETAIL6);
			$("#detail_p6").text(data[id].DETAIL7);
   		}
   	});
})
