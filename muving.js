$(document).ready(function(){
	setInterval(function(){
	$("#muvable").animate({"width":"500px","height":"300px"},3000);
	$("#muvable").animate({"margin-left":"+=1000"},5500);
	$("#muvable").animate({"width":"0px","height":"0px"},3000);
	$("#muvable").animate({"width":"500px","height":"300px"},3000);
	$("#muvable").animate({"margin-left":"-=1000"},5500);
	$("#muvable").animate({"width":"0px","height":"0px"},3000);
});
});

	