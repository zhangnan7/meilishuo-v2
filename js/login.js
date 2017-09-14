window.onload=function(){
	$("#errorTip").hide()
	
}


$("#phone,#password").blur(function(){
	var phone=$("#phone").val()
	var psd=$("#password").val()
	var reg=/^\d{11}$/;
	var isphone=reg.test(phone)
	var reg=/^\w+@\w+$/;
	var ismail=reg.test(phone)
/*	console.log(ismail)
	console.log(isphone)*/
	var reg=/^\w{3,10}$/;
	var isname=reg.test(phone)
	if( (isphone||ismail||isname ) && psd){
		$("#errorTip").hide()
	}else{
		$("#errorTip").show()
	}
}).focus(function(){
	$("#errorTip").hide()
})

$("#pc-footer").load("public.html #pc-footer");

