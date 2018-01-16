$(function(){
	$("#header").load("header.html");
    $("#footer").load("footer.html");
    
    hashchange();
//	$(window).on( 'hashchange', function(e){
//		hashchange();
//	});
    
   	$(".content_nav").find("a").click(function(){
		var hr = $(this).attr("href");
   		var eqh = $(hr).offset().top;
   		$("html,body").stop().animate({scrollTop:eqh},600);
   	})  	
   	
   	function hashchange(){
   		var indexHs = window.location.hash.substring(1);
    	if (indexHs == 1 || indexHs == 2 || indexHs == 3) {
			var hr = $(".content_nav").find("a").eq(indexHs - 1).attr("href");
			var eqh = $(hr).offset().top;
			console.log(eqh);
			$("html,body").stop().animate({scrollTop:eqh},600);
    	}
   	}
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 450){
			$(".content_nav").addClass("xiding");
		}else{
			$(".content_nav").removeClass("xiding");
		}
	})
   	
})