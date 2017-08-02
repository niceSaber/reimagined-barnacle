$(function(){
	$(".button1").bind("click",function(){
		var length = $("p").length;
		var now_length = length +1;
			$("body").append("<p>"  +now_length +"." +"我单击了"+ now_length +"次"+ "</p>");
	});
	$(".button2").bind("click",function(){
		var length = $("p").length;
		var row = $("#row").val();
		if(row.indexOf(".") > -1){
			alert("只要整数!");
		}
		if(row-1 >0 && row < length ){
			$("body").children("p")[row-1].remove();
		}else if(row > length){
			alert("请你先增加这么多吧！");
		}else{
			alert("请输入大于0的整数！");
		}
		
	});	
});