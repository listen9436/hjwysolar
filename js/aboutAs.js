$(function(){
	$("#header").load("header.html");
    $("#footer").load("footer.html");
    
    hashchange();
	$(window).on( 'hashchange', function(e){
		hashchange();
	});
    
   	$(".content_left").find("p").click(function(){
   		$(this).addClass("active").siblings().removeClass("active");
   		$(".content_right").find(".content_right_list").css("display","none").eq($(this).index() - 1).css("display","block");
   		$(".banner").find("img").css("display","none").eq($(this).index() - 1).css("display","block");
// 		indexHs = $(this).index();
// 		window.location = "about.html#" + indexHs;
   	})  	
   	
   	function hashchange(){
   		var indexHs = window.location.hash.substring(1);
    	if (indexHs == 1 || indexHs == 2 || indexHs == 3) {
    		$(".banner").find("img").css("display","none").eq(indexHs - 1).css("display","block");
			$(".content_left").find("p").removeClass("active").eq(indexHs - 1).addClass("active");
       	 	$(".content_right").find(".content_right_list").css("display","none").eq(indexHs - 1).css("display","block");
    	}
   	}
})