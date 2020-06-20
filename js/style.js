// ----------------------------------------------------------
let stack=[]

$('#token,#application,#case,#admin,#student').click(function(){

	var str="#"+$(this).attr('id')+"-form"
	stack.push(str)

	var size=100

	if(stack.length==1){
		$("#back-div").css({
			'height':10+"%"
		});
		size=90
	}

	$(str).css({
		'height':size+"%"
	});
});

$('#back').click(function(){
	if(stack.length==1){
		$("#back-div").css({
			'height':0+"%"
		});
	}

	$(stack.pop()).css({
		'height':0+"%"
	});
});

// ----------------------------------------------------------


$('#button').click(function(){
	window.scrollTo(0,$(window).height())
});


// ----------------------------------------------------------

