$(function() {
	   var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
	var test = ["1","12","13","14","15","16","17","18","19","144","153"];
	$("#autoComplete").autocomplete({source:test});
})

ping = function() {
	$.ajax({
		type: "get",
		url: "https://b.b2cex.com/sales/askPriceOrder/productQueryByName.action?productName=1",
		async: false,
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		success: function(data) {
			alert(data);
		}
	});
}
query_autoComplete = function(){
	$("input").autocomplete({suorve:["1","12","13","14","15","16","17","18","19","144","153"]});
}
//[{
//	id: "1708011748540166",
//	name: "lm-保-2-1-1-1"
//}, {
//	id: "1708011748300165",
//	name: "lm-保-2-1-1"
//}, {
//	id: "1708011748170164",
//	name: "lm-保-2-2-1"
//}, {
//	id: "1708011747190162",
//	name: "lm-保-2-1"
//}, {
//	id: "1708011747020161",
//	name: "lm-保-1-1-1-1"
//}, {
//	id: "1708011746490160",
//	name: "lm-保-1-2-1"
//}, {
//	id: "1708011746360159",
//	name: "lm-保-1-1-1"
//}, {
//	id: "1708011746240158",
//	name: "lm-保-1-2"
//}, {
//	id: "1708011746150157",
//	name: "lm-保-1-1"
//}, {
//	id: "1708011512420232",
//	name: "lm-保-1"
//}, {
//	id: "1708011512150231",
//	name: "lm-全-2-2-1"
//}, {
//	id: "1708011511580230",
//	name: "lm-全-2-1-1-1"
//}, {
//	id: "1708011511440229",
//	name: "lm-全-2-1-1"
//}, {
//	id: "1708011458150227",
//	name: "lm-全-2-1"
//}, {
//	id: "1708011456170226",
//	name: "lm-全-1-1-1-1"
//}, {
//	id: "1708011445220225",
//	name: "lm-全-1-2-1"
//}, {
//	id: "1708011445010224",
//	name: "lm-全-1-1-1"
//}, {
//	id: "1708011433360208",
//	name: "lm-全-1-2"
//}, {
//	id: "1708011433210207",
//	name: "lm-全-1-1"
//}, {
//	id: "1708011433080206",
//	name: "lm-全-1"
//}, {
//	id: "1708011419440199",
//	name: "lm-行-2-2-1"
//}, {
//	id: "1708011419230198",
//	name: "lm-行-2-1-1-1"
//}, {
//	id: "1708011419010197",
//	name: "lm-行-2-1-1"
//}, {
//	id: "1708011418330195",
//	name: "lm-行-2-1"
//}, {
//	id: "1708011418000193",
//	name: "lm-行-1-2-1"
//}, {
//	id: "1708011417390192",
//	name: "lm-行-1-2"
//}, {
//	id: "1708011417180191",
//	name: "lm-行-1-1-1-1"
//}, {
//	id: "1708011417060190",
//	name: "lm-行-1-1-1"
//}, {
//	id: "1708011416500189",
//	name: "lm-行-1-1"
//}, {
//	id: "1708011416370188",
//	name: "lm-行-1"
//}]