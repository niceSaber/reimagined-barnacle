$(function(){
	$("#test").dialog({
		title:"Fighting",
		autoOpen:false,
		modal:true,
		buttons:{
			"确定":function(){
				var text = $(this).find("p").text();
				$("body").append("<h4>"+ text +"</h4>");
				$(this).dialog("close");
				$(this).html('');
			},
			"返回":function(){
				$(this).dialog("close");
				$(this).html('');
			}
		}
	});
	$("#button1").click(function(){
		$("#test").append("<p>我要传值</p><button onclick='copy_p(this)'>复制</button>");
		$("#test").dialog("open");
	});
});
copy_p = function(obj){
	var text = $(obj).prev()[0].outerHTML;
	$("#test").append(text);
}
