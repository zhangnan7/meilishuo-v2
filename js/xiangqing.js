$(".top_list li").mouseover(function(){
		$(this).children("a").css("color","#f36")
		
	}).eq(4).mouseover(function(){
		$(".collect").css("display","block")
	}).end().eq(9).mouseover(function(){
		$(".service_1").css("display","block")
	})
	$(".top_list li").mouseout(function(){
		$(this).children("a").css("color","")
		
	}).eq(4).mouseout(function(){
		$(".collect").css("display","none")
	}).end().eq(9).mouseout(function(){
		$(".service_1").css("display","none")
	})