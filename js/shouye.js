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
	/*导航条吸顶效果*/
	var oNav = document.getElementsByClassName("top_nav")[0];
	window.onscroll = function(){
		var h = 190;
		var sTop = document.body.scrollTop || document.documentElement.scrollTop ;//获取页面滚走的距离
		if( sTop > h ){
			oNav.style.position = "fixed";
			oNav.style.top = "0";
			oNav.style.width =" 100%" ;
			oNav.style.background="#fff";
			oNav.style.zIndex="999";
			$(".go-top").css("display","block");
			
		}else{
			oNav.style.position = "";
			$(".go-top").css("display","none");
			
		}
	}
	$(".go-top").mousedown(function(){
		$("body").animate({"scrollTop":0},500)
	})

//导航条点击效果
$(".nav li").click(function(){
	$(this).find("a").css({"color":"#f36","border-bottom":"2px solid #FF3366"}).end().siblings().find("a").css({"color":"#333","border":"none"})
})

//banner轮播
	autoPlay()
    var timer = setInterval(autoPlay , 2000);
    
    var index = 0;
    function autoPlay(){
     	index++;
     	
     	if(index == 3){
     		index = 0;
     	}
     	$(".banner-num span").eq(index).addClass("active").siblings().removeClass("active");
     	$(".banner li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    }
    $(".banner-num span").mouseover(function(){
		clearInterval( timer );
		index = $(this).index() - 1;
		autoPlay();
	})
	$(".banner-num span").mouseout(function(){
		timer = setInterval(autoPlay,2000);
	})
    
//ajax请求数据
var deffered = $.ajax({
		type:"get",
		url:"js/data.json",
		dataType:"json" //如果指定预期返回的类型，结果就是预期类型 就不是string
	});
	//ajax请求成功执行done方法
	deffered.done(function(res){
		//添加商品信息
		for(var j=0;j<res.xinpin.list.length;j++){
						$content=$(`<li><a href="#">
					<img src="img/${res.xinpin.list[j].src}" alt="" />
									<p>${res.xinpin.list[j].price}</p>
									<span>${res.xinpin.list[j].name}</span>
									</a>
									</li>
									`)
						$content.appendTo($(".ajax_list"))
						
		}
		$(".today").css({"color":"#FF3366","border-bottom":"2px #f36 solid"})
			$(".week").click(function(){
				$(".ajax_list").html("")
					for(var j=0;j<res.rexiao.list.length;j++){
						$content=$(`<li><a href="#">
					<img src="img/${res.rexiao.list[j].src}" alt="" />
									<p>${res.rexiao.list[j].price}</p>
									<span>${res.rexiao.list[j].name}</span>
									</a>
									</li>
									`)
						$content.appendTo($(".ajax_list"))
						
					}
				$(this).css({"color":"#FF3366","border-bottom":"2px #f36 solid"})
						.siblings().css({"color":"#333","border-bottom":"none"})
			})
			$(".today").click(function(){
				$(".ajax_list").html("")
					for(var j=0;j<res.xinpin.list.length;j++){
						$content=$(`<li><a href="#">
					<img src="img/${res.xinpin.list[j].src}" alt="" />
									<p>${res.xinpin.list[j].price}</p>
									<span>${res.xinpin.list[j].name}</span>
									</a>
									</li>
									`)
						$content.appendTo($(".ajax_list"))
						
					}
				$(this).css({"color":"#FF3366","border-bottom":"2px #f36 solid"})
						.siblings().css({"color":"#333","border-bottom":"none"})
				
			})
			
	
	})


//购物车
$(".addcart").click(function(){
		var arr = [];
		var flag = true;//可以向数组中添加数据
		var _json = {
			name: $(this).prev().data("name"),
			src: $(this).prev().data("src"),
			price: $(this).prev().data("price"),
			count:1
		}
		//当再次点击按钮时，cookie信息被覆盖  解决 ： 先取出cookie数据 存入到数组中，然后在把新增的商品存入到数组中
		var cookieInfo = getCookie("shoplist");
		if( cookieInfo.length != 0 ){//表示cookie中有数据
			arr = cookieInfo;
			//点击相同商品时，需要做商品数量的累加    用当前点击的商品编号id   和  取出来的cookie的 数据中商品id做比较 发现有相等的，count++
			for(var i in arr){
				if(_json.name == arr[i].name){
					arr[i].count++;
					flag = false;
					break;
				}
			}
		}
		
		if(flag){
			arr.push(_json);
		}
		
		setCookie("shoplist",JSON.stringify(arr));
		var f = confirm("是否继续购买?确定--继续购买，取消---去购物车结算");
		if( !f ){
			location.href = "cart.html";
		}
		console.log( document.cookie );
	})