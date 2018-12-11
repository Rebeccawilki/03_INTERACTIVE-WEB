
//TITLE ANIMATION MARQUEE PLUGIN:

$('.MainMenu').marquee({//speed in milliseconds of the marquee
    duration: 9000,//gap in pixels between the tickers
    gap: 20,//time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    direction: 'left',//'left' or 'right'
    duplicated: true //true or false - should the marquee be duplicated to show an effect of continues flow
});




//MOVE SHAPES
	
	$("#lcircle_placement").click(function(){

		var min = 180;
		var maxY = 17.8;
		var maxX = 10.8;

	$("#LCircle").css("top",(Math.floor(Math.random() * maxY)*100-min)+"px") 
	$("#LCircle").css("left",(Math.floor(Math.random() * maxX )*100-min)+"px")
	}); 


	$("#mcircle_placement").click(function(){

		var min = 100;
		var maxY = 18;
		var maxX = 10.5;

	$("#MCircle").css("top",(Math.floor(Math.random() * maxY)*100-min)+"px") 
	$("#MCircle").css("left",(Math.floor(Math.random() * maxX )*100-min)+"px")
	}); 


	$("#scircle_placement").click(function(){

		var min = 80;
		var maxY = 18;
		var maxX = 12;

	$("#SCircle").css("top",(Math.floor(Math.random() * maxY)*100-min)+"px") 
	$("#SCircle").css("left",(Math.floor(Math.random() * maxX )*100- min)+"px")
	}); 


	$("#rectangle_move").click(function(){

		var min = 180;
		var maxY = 18;
		var maxX = 11;

	$("#Rectangle").css("top",(Math.floor(Math.random() * maxY)*100- min)+"px") 
	$("#Rectangle").css("left",(Math.floor(Math.random() * maxX )*100- min)+"px")
	}); 



	$("#bar1_move").click(function(){

		var maxY = 16;
		var maxX = 7;

	$("#Bar1").css("top",(Math.floor(Math.random() * maxY)*100-100)+"px") 
	$("#Bar1").css("left",(Math.floor(Math.random() * maxX)*100-100)+"px")
	}); 


	$("#bar2_move").click(function(){

		var maxY = 17;
		var maxX = 7;

	$("#Bar2").css("top",(Math.floor(Math.random() * maxY)*100)+"px") 
	$("#Bar2").css("left",(Math.floor(Math.random() * maxX)*100-100)+"px")
	}); 




//MOVE TEXT

	$("#title1_move").click(function(){


		var maxY = 15;
		var maxX = 9;

	$("#Title1").css("top",(Math.floor(Math.random() * maxY)*100)+"px") 
	$("#Title1").css("left",(Math.floor(Math.random() * maxX )*100)+"px")
	}); 


	$("#title2_move").click(function(){


		var maxY = 15;
		var maxX = 9;

	$("#Title2").css("top",(Math.floor(Math.random() * maxY)*100)+"px") 
	$("#Title2").css("left",(Math.floor(Math.random() * maxX)*100)+"px")
	}); 


	$("#mainsub_move").click(function(){

		var maxY = 16;
		var maxX = 6;

	$("#MainSub").css("top",(Math.floor(Math.random() * maxY)*100)+"px") 
	$("#MainSub").css("left",(Math.floor(Math.random() * maxX)*100)+"px")
	}); 



	$("#sub2_move").click(function(){

		var maxY = 16;
		var maxX = 10;

	$("#Sub2").css("top",(Math.floor(Math.random() * maxY)*100-50)+"px") 
	$("#Sub2").css("left",(Math.floor(Math.random() * maxX)*100-50)+"px")
	}); 


	$("#sub3_move").click(function(){

		var maxY = 16;
		var maxX = 10;

	$("#Sub3").css("top",(Math.floor(Math.random() * maxY)*100-50)+"px") 
	$("#Sub3").css("left",(Math.floor(Math.random() * maxX )*100-50)+"px")
	}); 


	$("#para_move").click(function(){

		var maxY = 16.5;
		var maxX = 9;

	$("#Paragraph").css("top",(Math.floor(Math.random() * maxY)*100)+"px") 
	$("#Paragraph").css("left",(Math.floor(Math.random() * maxX)*100)+"px")
	}); 

	
