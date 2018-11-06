//alert("is this working?")

//add an event to the complete document to see how far we can sdcroll from the top:


$(document).scroll(function(){

	fromTop = $(document).scrollTop()

	$(".square").text(fromTop);

	if (fromTop>2000) {
		$(".square").addClass("anotherClassname")

	} else {
		$(".square").removeClass("anotherClassname");	
	}

	if (fromTop>4000){
		$(".square").addClass("anotherClassname2")
	}

	else {
		$(".square").removeClass("anotherClassname2");

	}

//	 if (fromTop < 2000) {
//		$(".square").removeClass('anotherClassname anotherClassname2');

//	}




})


$(".square").on("click", function (){
	$(this).css("background", "red");


})


$(".square").on("click", function (){
	$(".square2").css("background", "green");


})


