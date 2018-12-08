//MOVE SHAPES
	
	$("#lcircle_placement").click(function(){

		var min = 180;
		var maxY = 1780;
		var maxX = 1080;

	$("#LCircle").css("top",(Math.floor(Math.random() * maxY)- min)+"px") 
	$("#LCircle").css("left",(Math.floor(Math.random() * maxX )- min)+"px")
	}); 


	$("#mcircle_placement").click(function(){

		var min = 150;
		var maxY = 1800;
		var maxX = 1000;

	$("#MCircle").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#MCircle").css("left",(Math.floor(Math.random() * maxX )- min)+"px")
	}); 


	$("#scircle_placement").click(function(){

		var min = 150;
		var maxY = 1800;
		var maxX = 1000;

	$("#SCircle").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#SCircle").css("left",(Math.floor(Math.random() * maxX )- min)+"px")
	}); 


	$("#rectangle_move").click(function(){

		var min = 180;
		var maxY = 1780;
		var maxX = 1080;

	$("#Rectangle").css("top",(Math.floor(Math.random() * maxY)- min)+"px") 
	$("#Rectangle").css("left",(Math.floor(Math.random() * maxX )- min)+"px")
	}); 


//MOVE TEXT

	$("#title1_move").click(function(){


		var maxY = 17;
		var maxX = 11;

	$("#Title1").css("top",(Math.floor(Math.random() * maxY)*100)+"px") 
	$("#Title1").css("left",(Math.floor(Math.random() * maxX )*100)+"px")
	}); 


	$("#title2_move").click(function(){


		var maxY = 17;
		var maxX = 11;

	$("#Title2").css("top",(Math.floor(Math.random() * maxY)*100)+"px") 
	$("#Title2").css("left",(Math.floor(Math.random() * maxX)*100)+"px")
	}); 


	$("#mainsub_move").click(function(){

		var maxY = 1600;
		var maxX = 270;

	$("#MainSub").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#MainSub").css("left",(Math.floor(Math.random() * maxX ))+"px")
	}); 



	$("#sub2_move").click(function(){

		var maxY = 1600;
		var maxX = 650;

	$("#Sub2").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#Sub2").css("left",(Math.floor(Math.random() * maxX ))+"px")
	}); 


	$("#sub3_move").click(function(){

		var maxY = 1600;
		var maxX = 650;

	$("#Sub3").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#Sub3").css("left",(Math.floor(Math.random() * maxX ))+"px")
	}); 


	$("#para_move").click(function(){

		var maxY = 1600;
		var maxX = 650;

	$("#Paragraph").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#Paragraph").css("left",(Math.floor(Math.random() * maxX ))+"px")
	}); 

	

	$("#bar1_move").click(function(){

		var maxY = 1600;
		var maxX = 650;

	$("#Bar1").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#Bar1").css("left",(Math.floor(Math.random() * maxX ))+"px")
	}); 


	$("#bar2_move").click(function(){

		var maxY = 1600;
		var maxX = 650;

	$("#Bar2").css("top",(Math.floor(Math.random() * maxY))+"px") 
	$("#Bar2").css("left",(Math.floor(Math.random() * maxX ))+"px")
	}); 


