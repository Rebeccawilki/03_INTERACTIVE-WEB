
i =0; //a variable equalling 0.

while(i < 6500) { //keep doing this code until i = 5000
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








			$(".NSAimg").mouseover(function(){
			  $(".NSAimg").css("opacity", "1");
			});

			$(".Beijingimg").mouseover(function(){
			  $(".Beijingimg").css("opacity", "1");
			});


			$(".Germanyimg").mouseover(function(){
			  $(".Germanyimg").css("opacity", "1");
			});

			$(".Riyadhimg").mouseover(function(){
			  $(".Riyadhimg").css("opacity", "1");
			});

			$(".UKimg").mouseover(function(){
			  $(".UKimg").css("opacity", "1");
			});

			$(".Moscowimg").mouseover(function(){
			  $(".Moscowimg").css("opacity", "1");
			});

			$(".Pleximg").mouseover(function(){
			  $(".Pleximg").css("opacity", "1");
			});

			$(".Parisimg").mouseover(function(){
			  $(".Parisimg").css("opacity", "1");
			});

			$(".FBimg").mouseover(function(){
			  $(".FBimg").css("opacity", "1");
			});





			//$(".NSAtxt").mouseover(function(){
			  //$(".NSAtxt").css("opacity", "1");
			//})
			


			$(".NSAtxt").mouseover(function(){
					$(".NSAtxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })

			//$(".Beijingtxt").mouseover(function(){
			  //$(".Beijingtxt").css("opacity", "1");
			//});


			$(".Beijingtxt").mouseover(function(){
					$(".Beijingtxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })


			//$(".UKtxt").mouseover(function(){
			  //$(".UKtxt").css("opacity", "1");
			//});


			$(".UKtxt").mouseover(function(){
					$(".UKtxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })


			//$(".Riyadhtxt").mouseover(function(){
			  //$(".Riyadhtxt").css("opacity", "1");
			//});


			$(".Riyadhtxt").mouseover(function(){
					$(".Riyahdtxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })


			//$(".Germanytxt").mouseover(function(){
			  //$(".Germanytxt").css("opacity", "1");
			//});

			$(".Germanytxt").mouseover(function(){
					$(".Germanytxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })

			//$(".Russiatxt").mouseover(function(){
			  //$(".Russiatxt").css("opacity", "1");
			//});


			$(".Russiatxt").mouseover(function(){
					$(".Russiatxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })


			//$(".Plextxt").mouseover(function(){
			  //$(".Plextxt").css("opacity", "1");
			//});


			$(".Plextxt").mouseover(function(){
					$(".Plextxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })


			//$(".Paristxt").mouseover(function(){
			  //$(".Paristxt").css("opacity", "1");
			//});

			$(".Paristxt").mouseover(function(){
					$(".Paristxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })		



			//$(".FBtxt").mouseover(function(){
			  //$(".FBtxt").css("opacity", "1");
			//});


			$(".FBtxt").mouseover(function(){
					$(".FBtxt").css({
					"z-index":1,
					"opacity":1
			 });
			 })		



var audio = $(".sound")[0];

//$(".NSAimg").mouseenter(function(){
	//audio.play();
//});








$("a").attr("target","_blank");

