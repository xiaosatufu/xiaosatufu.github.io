//functions
//check uesrAgents
var checkUA=function checkUA(){
	var user = navigator.userAgent;
	var Agents = ["Android","iPhone","iPad","Windows Phone","MeeGo"];
	var flag = false;
	for (var i = 0;i<Agents.length;i++) {
        if (user.indexOf(Agents[i]) > 0){
        	flag = true;
        }
	}
	return flag;
}
//判断元素是否存在
var isexist=function (jqo){
	return jqo.length>0?true:false;
}
//public action
$(function(){
	//导航隐藏切换
	$(".nav-menu").bind("click",function(){
		if($(".nav").hasClass("nav-hid")){
			$(".nav").removeClass("nav-hid");
		}
		if($("body").hasClass("body-show")){
			$("body").removeClass("body-show");
		}
		if($(".nav-over").hasClass("none")){
			$(".nav-over").removeClass("none");
		}
		$(".nav").addClass("nav-show");
		$("body").addClass("body-hid");
		
	});
	$(".nav-over").bind("click",function(){
		if($(".nav").hasClass("nav-show")){
			$(".nav").removeClass("nav-show");
		}
		if($("body").hasClass("body-hid")){
			$("body").removeClass("body-hid");
		}
		if(!$(".nav-over").hasClass("none")){
			$(".nav-over").addClass("none");
		}
		$(".nav").addClass("nav-hid");
		$("body").addClass("body-show");
	});

});
//index action
$(function(){
	//遮罩切换
	if(isexist($(".img-con .thumb"))){
		$(".img-con .thumb").hover(function(){
			$(this).children("img").addClass("transparent");
			$(this).children(".thumb-con").children(".show-hid").removeClass("none");
			$(this).children(".thumb-con").children("h4").addClass("mt");
		},function(){
			$(this).children("img").removeClass("transparent");
			$(this).children(".thumb-con").children(".show-hid").addClass("none");
			$(this).children(".thumb-con").children("h4").removeClass("mt");
		});	
	}
	//视差
	if(!checkUA()&&isexist($(".parallax"))){
		$(window).bind("scroll",function(){
			var textop=$(".text-con").offset().top;
			var scrolled = $(window).scrollTop();
			if(scrolled-textop>=0){
				$(".parallax").addClass("relative");
				$(".parallax").css('margin-top',(0-(scrolled*0.75)+textop-140)+'px');
			}
			
		});
	}
	
});
//suit02 action
$(function(){
	//预览图切换
	if(isexist($(".suit-images .thumb li"))){
		$(".suit-images .thumb li").hover(function(){
			$(".suit-images .thumb li").removeClass("hover");
			$(this).addClass("hover");	
			$(".suit-images .details li").removeClass("show");
			$(".suit-images .details li").eq($(this).index()).addClass("show");
		});
	
	}
	//下拉隐藏显示切换
	if(isexist($(".suit-info .price .select"))){
		$(".suit-info .price .select").hover(function(){
			$(this).children(".select-list").addClass("show");	
		},function(){
			if($(this).children(".select-list").hasClass("show")){
				$(this).children(".select-list").removeClass("show");	
			}	
		});
	}
	//下拉选择
	if(isexist($(".suit-info .price .select .select-list li"))){
		$(".suit-info .price .select .select-list li").bind("click",function(){
			$(".suit-info .price .select span").html($(this).html());	
			$(".suit-info .price .select .select-list").removeClass("show");
		});	
		
	}
	//属性内容切换
	if(isexist($(".suit-info .details ul.ctrl li"))){
		$(".suit-info .details ul.ctrl li").hover(function(){
			$(".suit-info .details ul.ctrl li").removeClass("hover");
			$(this).addClass("hover");	
			$(".suit-info .details .text").addClass("none");
			$(".suit-info .details .text").eq($(this).index()).removeClass("none");
		});
	
	}
	
});

//suit03 aciton
$(function(){
	if(isexist($(".suit-cuspan .meun dl.tit"))){
		//右侧控制
		$(".suit-cuspan .meun dl.tit dd").bind("click",function(){
			if($(".suit-custom .list").hasClass("show")){
				$(".suit-custom .list").removeClass("show");	
			}
			$(".suit-custom .list").eq($(this).index()).addClass("show");	
		});	
		//箭头按钮控制
		$(".suit-custom .list .title span em").bind("click",function(){
			if($(".suit-custom .list").hasClass("show")){
				$(".suit-custom .list").removeClass("show");	
			}
			$(this).parents(".list").addClass("show");
		});
		//定制选择
		$(".suit-custom .list .cont .option").bind("click",function(){
			if($(this).parent(".cont").children(".option").hasClass("select")){
				$(this).parent(".cont").children(".option").removeClass("select");	
			}
			$(this).addClass("select");	
		});
		//定制保存
		$(".suit-custom .list .cont .save").bind("click",function(){
			$(".suit-cuspan .meun dl.con dd").eq($(this).parents(".list").index()).html($(this).parent(".cont").children(".select").children("span").html());
			if($(".suit-custom .list").hasClass("show")){
				$(".suit-custom .list").removeClass("show");	
			}
			$(".suit-custom .list").eq($(this).parents(".list").index()+1).addClass("show");	
			
		});
		//打开预览
		$(".suit-cuspan .button a.preview").bind("click",function(){
			if($(".preview-win").hasClass("none")){
				$(".preview-win").removeClass("none");
			}	
		});
		//关闭预览
		$(".preview-win .button a.recustom").bind("click",function(){
			$(".preview-win").addClass("none");	
		});
		//预览框跟随滚动
		if(!checkUA()&&isexist($(".suit-cuspan"))){
			$(window).bind("scroll",function(){
				var textop=$(".suit-cuspan").offset().top;
				var scrolled = $(window).scrollTop();
				//alert(textop-scrolled);
				if(scrolled-textop>=40){
					$(".suit-cuspan").addClass("suit-cuspan-fixed");
				}else{
					$(".suit-cuspan").removeClass("suit-cuspan-fixed");	

				}
				
			});
		}
	}	
});
//suit05 aciton
$(function(){
	//全选
	if(isexist($(".cart dl.list dt span.select input"))){
		$(".cart dl.list dt span.select input").bind("change",function(){
			if(this.checked){
				$(".cart dl.list dd div.select input").prop("checked",true);
			}else{
				$(".cart dl.list dd div.select input").prop("checked",false);
			}
		});
	}
});
