
i =0; //a variable equalling 0.

while(i < 5000) { //keep doing this code until i = 5000
	$(".background").append("<div class='blackSquare'></div>"); //selecting the "body" and adding a black square
	i = i+1; //adding one to i
}


$(".blackSquare").mouseover(function(){ //selecting all black squares and binding a hover function to each of them
	
	$(this)	//seclet the particular black square that you've hovered over
		.stop().animate({ 'opacity': '0' }, 0)
		.addClass("noWork")
		//closing the css ACTION

		setTimeout(function(){
	
		$(this).removeClass("noWork")
	}, 1500);
		
}) //closing the hover function


$(".blackSquare").mouseout(function delay(){
  $(this)	
		.stop().animate({ 'opacity': '100' }, 60000) 
		.addClass("Work")
}); 


//$(this).css('pointer-events', 'auto');
   //  }

$(".red").click(function() {
   window.location = $(this).find("a").attr("href");
});



$(".testtxt").mouseover(function(){
  $(".testtxt").css("opacity", "1");
});

$(".NSAimg").mouseover(function(){
  $(".NSAimg").css("opacity", "1");
});




