// Check List Items By clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// click on x to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type= 'text']").keypress(function(event) {
	if (event.which === 13){
		//grab new text from input
		var text = $(this).val();
		$(this).val("");
		//create new li and add
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type= 'text']").fadeToggle()
});