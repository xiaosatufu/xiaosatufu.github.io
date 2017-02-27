$(function(){ 
	// alert(document.body.clientWidth);
	// if (Swidth<1024 &&Swidth>640) {
	// 	$(".m-infor").css({"position":"relative"})
	// };
	$(".suit09 .m-right .shareBox .share span").click(function(){ 
		$(".m-share").hide();
	})
	$(".suit08 .m-bks li").each(function(i){ 
		$(this).click(function(){ 
			//alert(i);
		})
	});
	$(".suit-ci .g-ct .m-address .address li").each(function(i){ 
		$(this).click(function(){ 
			$(".suit-ci .g-ct .m-address .address li").removeClass("on");
			$(".suit-ci .g-ct .m-address .address li:eq("+i+")").addClass("on")
		})
	});
	$(".suit-ci .g-ct .m-ci .tt span a").click(function(){ 
		$(".suit-ci .g-ct .m-ci td input").removeAttr("disabled");
	});
	$(".suit-ci .g-ct .m-bi .tt span a").click(function(){ 
		$(".suit-ci .g-ct .m-bi td input").removeAttr("disabled");
	});
	$(".suit-ci .g-ct .m-bi .u-btn").click(function(){ 
		$(".suit-ci .g-ct .m-ci td input").attr("disabled",true) ;
		$(".suit-ci .g-ct .m-bi td input").attr("disabled",true) ;
	});
	$(".suit08 .g-ct .m-Reservation .m-btn .btn").each(function(i){ 
		$(this).click(function(){ 
			$(".suit08 .g-ct .m-Reservation .m-btn .btn").removeClass("on");
			$(".suit08 .g-ct .m-Reservation .m-btn .btn:eq("+i+")").addClass("on");
			$(".suit08 .g-ct .m-Reservation .res-box span").html($(this).children("span.chi").html());
		});
	});
	$("#LZ li").each(function(i){ 
		$(this).click(function(){ 
			$("#LZ img").removeClass("on");
			$("#LZ img:eq("+i+")").addClass("on");
			$("#LZ span").removeClass("on");
			$("#LZ span:eq("+i+")").addClass("on");
		});
	});
	$("#NK li").each(function(i){ 
		$(this).click(function(){ 
			$("#NK img").removeClass("on");
			$("#NK img:eq("+i+")").addClass("on");
			$("#NK span").removeClass("on");
			$("#NK span:eq("+i+")").addClass("on");
		});
	});
	$("#LZ .u-btn").click(function(){ 
		$(".m-Split .u-title").addClass("on");
		$(".m-Split .u-title img").attr("src","images/icon_02.png");
	});
	$("#KC .u-btn").click(function(){ 
		$(".m-Buttons .u-title").addClass("on");
		$(".m-Buttons .u-title img").attr("src","images/icon_02.png");

	});
	$(".suit08 .g-ct .m-Reservation .m-btn .u-btn").click(function(){ 
		$(".suit08 .form-box").show();
	});
	$(".suit05-1 .g-ct .m-sc .ct-main li").each(function(i){ 
		$(this).click(function(){ 
			$(".suit05-1 .g-ct .m-sc .ct-main li img").removeClass("on");
			$(".suit05-1 .g-ct .m-sc .ct-main li img:eq("+i+")").addClass("on");
			$(".suit05-1 .g-ct .m-sc .ct-main li span").removeClass("on");
			$(".suit05-1 .g-ct .m-sc .ct-main li span:eq("+i+")").addClass("on");

		});
	});
	$(".suit05-1 .m-sc .u-btn").click(function(){ 
		$(".suit05-1 .m-cf .u-title").addClass("on");
		$(".suit05-1 .m-cf .u-title img").attr("src","images/icon_02.png");
		$(".suit05-1 .m-sc .u-title").addClass("on");
		$(".suit05-1 .m-sc .u-title img").attr("src","images/icon_02.png");
	});
	$(".suit05-1 input").attr("disabled",false);
	//保存定制
	$(".suit05-1 .g-ct .m-sc .ct-main .u-btn").bind("click",function(){
		$(".suit05-1 .m-infor .infor-ct .infor span").eq($(this).parents(".Feature").index()-1).html($(this).parents(".ct-main").children("#scul").children("li").children("span.on").html());
	});
	$(".suit05-1 .g-ct .m-cf .cf-main .m-form table td input:lt(3)").focusout(function() {
		$(".suit05-1 .m-ms ul li").eq($(this).parent("td").index()).children("input").val($(this).val());
    });
	$(".suit05-1 .m-ms .btn2").bind("click",function(){
		$(".suit05-1 .g-ct .m-cf .cf-main .m-form table td input:gt(2)").each(function(ind,ele){
			$(".suit05-1 .m-infor .infor-ct .infor").eq(ind+4).children("span").html(ele.value);	
		});
		
	});
	//关闭幻灯弹窗
	$(".w3cFocus .btn-close").bind("click",function(){
		$(this).parents(".w3cFocus").addClass("none");	
	});
	
	//打开幻灯弹窗
	$(".suit08 .g-ct .m-bks li.l1").bind("click",function(){
		if($(".w3cFocus").hasClass("none")){
			$(".w3cFocus").removeClass("none");
		}
	});
	
});
