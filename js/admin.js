$('.view-button').click(function(){
    var name=$(this).attr('name');
    $("#back-div").css({
		'height':10+"%"
	});
	$("#show").css({
		'height':90+"%"
	});
	document.getElementById('heading').innerHTML=name;

});

$('#back').click(function(){
	$("#back-div").css({
		'height':0+"%"
	});
	$('#show').css({
		'height':0+"%"
	});
});

$('#raised').click(function(){
	window.location="./raised.html"
});