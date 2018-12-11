
//TITLE1 COLOR:

		var index = -1; //creating a variable that starts the index at the first element in the array (0=blue) 
		var titleColorArray = ['blue','yellow','black']; //creating an array of colors


		$("#title1_color").click(function(){ //selecting title1Color and creating a click function associated with it
			  
			  index++; // index = index +1
			  if (index==3){ //== is a comparative. this gives a conditional statement for when the index arrives at 3  
			  		index = 0;
			  }

		$("#Title1").css('color',titleColorArray[index]); //selecting title1 and changes the title1 color attribute based on the array index
			  $("#Title1").css('-webkit-text-stroke-color',titleColorArray[index]); //associating the stroke color with the fill color
			})


//TITLE2 COLOR:

		var index = -1; 
		var titleColorArray = ['blue','yellow','black']; 


		$("#title2_color").click(function(){ 
			  
			  index++; 
			  if (index==3){ 
			  		index = 0;
			  }

		$("#Title2").css('color',titleColorArray[index]); 
			  $("#Title2").css('-webkit-text-stroke-color',titleColorArray[index]); 
			})



// TITLE STROKE/FILL FUNCTION:

		var isStroked = false; //indicates the default type style as not stroked


	//TITLE1 STROKE/FILL:

		$("#title1_fill").click(function(){ //selecting titl1fill button and creating a click function with it
				if (isStroked == false){ //is a comparative, saying if isStroked is false...
					isStroked = true; //then when you click on it it goes to isStroked is true
				$("#Title1").css('-webkit-text-stroke-width', '5px');
				$("#Title1").css('-webkit-text-stroke-color', titleColorArray[index]);
				$("#Title1").css('-webkit-text-fill-color','transparent');
			    }else{ //when the stroke is true, when you click on it, it goes back to the false (default) setting
			    	isStroked = false;
				$("#Title1").css('-webkit-text-stroke-color','none');
				$("#Title1").css('-webkit-text-fill-color','');
				$("#Title1").css('-webkit-text-stroke-width', '0px');
				$("#Title1").css('-webkit-text-fill-color','opaque');
			    }
			})

	//TITLE2 STROKE/FILL:

			$("#title2_fill").click(function(){ 
				if (isStroked == false){ 
					isStroked = true; 
				$("#Title2").css('-webkit-text-stroke-width', '5px');
				$("#Title2").css('-webkit-text-stroke-color', titleColorArray[index]);
				$("#Title2").css('-webkit-text-fill-color','transparent');

			    }else{ 
			    	isStroked = false;
				$("#Title2").css('-webkit-text-stroke-color','none');
				$("#Title2").css('-webkit-text-fill-color','');
				$("#Title2").css('-webkit-text-stroke-width', '0px');
				$("#Title2").css('-webkit-text-fill-color','opaque');
			    }
			})


//TITLE 1 & 2 MOUSEOVER COLOR CHANGE FUNCTIONS:

	//TITLE1 MOUSEOVER:

		$("#title1_menu").mouseover(function(){
				$("#Title1").addClass('hoverWhiteTitle');
		});

		$("#title1_menu").mouseout(function(){
				$("#Title1").removeClass('hoverWhiteTitle');

		});


	//TITLE2 MOUSEOVER:

		$("#title2_menu").mouseover(function(){
				$("#Title2").addClass('hoverWhiteTitle');
		});

		$("#title2_menu").mouseout(function(){
				$("#Title2").removeClass('hoverWhiteTitle');

		});



//SUBHEADER TEXT COLOR:

		var index3 = -1; 
		var MainSubColorArray = ['black','yellow','blue']; 


		$("#mainsub_color").click(function(){ 
			  
			 index3++; 
			 if (index3==3){ 
			  		index3 = 0;
			  	}
			 $("#MainSub").css('color',MainSubColorArray[index3]); 
			})



//SUBHEADER BACKGROUND COLOR:

		var index4 = -1; 
		var MainSubBackColorArray = ['black','yellow','blue', 'transparent']; 


		$("#mainsub_background").click(function(){ 
			  
			 index4++; 
			 if (index4==4){ 
			  		index4 = 0;
			  	}

			 $("#MainSubBack").css('background-color',MainSubBackColorArray[index4]); 
			})


//SUBHEADER MOUSEOVER COLOR CHANGE FUNCTIONS:

		$("#mainsub_menu").mouseover(function(){
				$("#MainSub").addClass('hoverWhiteTitle');
		});

		$("#mainsub_menu").mouseout(function(){
				$("#MainSub").removeClass('hoverWhiteTitle');

		});


//SUB2 TEXT COLOR:

		var index9 = -1; 
		var Sub2ColorArray = ['yellow','blue','black']; 


		$("#sub2_color").click(function(){ 
			  
			 index9++; 
			 if (index9==3){ 
			  		index9 = 0;
			  	}
			 $("#Sub2").css('color',Sub2ColorArray[index9]); 
			})

//SUB2 MOUSEOVER COLOR CHANGE FUNCTIONS:

			$("#sub2_menu").mouseover(function(){
					$("#Sub2").addClass('hoverWhiteTitle');
			});

			$("#sub2_menu").mouseout(function(){
					$("#Sub2").removeClass('hoverWhiteTitle');

			});

	
//SUB3 TEXT COLOR:

		var index10 = -1; 
		var Sub3ColorArray = ['yellow','blue','black'];


		$("#sub3_color").click(function(){ 
			  
			 index10++; 
			 if (index10==3){ 
			  		index10 = 0;
			  	}
			 $("#Sub3").css('color',Sub3ColorArray[index10]); 
			})


//SUB3 MOUSEOVER COLOR CHANGE FUNCTIONS:

		$("#sub3_menu").mouseover(function(){
				$("#Sub3").addClass('hoverWhiteTitle');
		});

		$("#sub3_menu").mouseout(function(){
				$("#Sub3").removeClass('hoverWhiteTitle');

		});
		

//PARAGRAPH COLOR:
		
		var index11 = -1; 
		var ParaColorArray = ['yellow','blue','black']; 


		$("#para_color").click(function(){ 
			  
			 index11++; 
			 if (index11==3){ 
			  		index11 = 0;
			  	}
			 $("#Paragraph").css('color',ParaColorArray[index11]); 
			})


//PARA MOUSEOVER COLOR CHANGE FUNCTIONS:

		$("#para_menu").mouseover(function(){
				$("#Paragraph").addClass('hoverWhiteTitle');
		});

		$("#para_menu").mouseout(function(){
				$("#Paragraph").removeClass('hoverWhiteTitle');

		});



//SHAPE COLOR CHANGE FUNCTIONS:

//L CIRCLE FILL COLOR:

		var index = -1; //creating avariable that starts the index at the first element in the array (0=black) 
		var circleColorArray = ['black','yellow','blue']; //creating an array of colors
		var CircleisStroked = false; //indicates the default type style as not stroked

		$("#lcircle_color").click(function(){ //selecting lcircle_color and creating a click function associated with it
			  index++; // index = index +1
			  if (index==3){ 
			  		index = 0;
			  }

			  if (CircleisStroked == true){
				$("#LCircle").css('border', '6px solid '+circleColorArray[index]);
				}else{
				$("#LCircle").css('background-color',circleColorArray[index]); //selecting LCircle and changes the background color attribute based on the array index
				
				}
			})


//L CIRCLE FILL/OUTLINE FUNCTIONS:

		$("#lcircle_fill").click(function(){ 
				if (index == -1){
					index = 0
				}
				if (CircleisStroked == false){ //is a comparative, saying if isStroked is false...
					CircleisStroked = true; //then when you click on it it goes to isStroked is true
				$("#LCircle").css('border', '6px solid '+circleColorArray[index]);
				$("#LCircle").css('background','transparent');
			    }else{ //when the stroke is true, when you click on it, it goes back to the false (default) setting
			    	CircleisStroked = false;
				$("#LCircle").css('border', '0px');
				$("#LCircle").css('background', 'opaque');
				$("#LCircle").css('background-color',circleColorArray[index]);
			    }
			})


//L CIRCLE MOUSEOVER COLOR CHANGE FUNCTIONS:

		$(".lcircle_label ").mouseover(function(){
				$("#LCircle").addClass('hoverShapeFill');
		});

		$(".lcircle_label").mouseout(function(){
				$("#LCircle").removeClass('hoverShapeFill');

		});


//M CIRCLE FILL COLOR:

		var index = -1; 
		var mcircleColorArray = ['black','yellow','blue']; 
		var mCircleisStroked = true; 

		$("#mcircle_color").click(function(){ 
			  index++; 
			  if (index==3){ 
			  		index = 0;
			  }

			  if (mCircleisStroked == false){
			  	$("#MCircle").css('background-color',mcircleColorArray[index]);
				}else{

				$("#MCircle").css('border','6px solid '+mcircleColorArray[index]);		
				
				}
			})



//M CIRCLE FILL/OUTLINE FUNCTIONS:

		$("#mcircle_fill").click(function(){ 
				if (index == -1){
					index = 0
				}
				if (mCircleisStroked == true){ //is a comparative, saying if isStroked is true...
					mCircleisStroked = false; //then when you click on it it goes to isStroked is false
					$("#MCircle").css('border', '0px');
					$("#MCircle").css('background', 'opaque');
					$("#MCircle").css('background-color',mcircleColorArray[index]);
			    }else{ //when the stroke is true, when you click on it, it goes back to the false (default) setting
			    	mCircleisStroked = true;
				$("#MCircle").css('border', '6px solid '+mcircleColorArray[index]);
				$("#MCircle").css('background','transparent');

			    }
			})


//M CIRCLE MOUSEOVER COLOR CHANGE FUNCTIONS:

		$(".mcircle_label").mouseover(function(){
			$("#MCircle").addClass('hoverShapeOutline');
			});

		$(".mcircle_label").mouseout(function(){
			$("#MCircle").removeClass('hoverShapeOutline');

			});
	 
	 

//S CIRCLE COLOR FUNCTIONS:
		
		var index18 = -1; 
		var circleColorArray = ['blue','yellow','black']; 
		var CircleisStroked = false; 

		$("#scircle_color").click(function(){ 
			  index18++; 
			  if (index18==3){ 
			  		index18 = 0;
			  }

			  if (CircleisStroked == true){
				$("#SCircle").css('border', '6px solid '+circleColorArray[index18]);
				}else{
				$("#SCircle").css('background-color',circleColorArray[index18]); 
				
				}
			})


//S CIRCLE FILL/OUTLINE FUNCTIONS:

		$("#scircle_fill").click(function(){ 
				if (index18 == -1){
					index18 = 0
				}
				if (CircleisStroked == false){ 
					CircleisStroked = true; 
				$("#SCircle").css('border', '6px solid '+circleColorArray[index18]);
				$("#SCircle").css('background','transparent');
			    }else{ 
			    	CircleisStroked = false;
				$("#SCircle").css('border', '0px');
				$("#SCircle").css('background', 'opaque');
				$("#SCircle").css('background-color',circleColorArray[index18]);
			    }
			})


//S CIRCLE MOUSEOVER COLOR CHANGE FUNCTIONS:

		$(".scircle_label ").mouseover(function(){
				$("#SCircle").addClass('hoverShapeFill');
		});

		$(".scircle_label").mouseout(function(){
				$("#SCircle").removeClass('hoverShapeFill');

		});




//RECTANGLE COLOR:

		var index5 = -1; 
		var rectangleColorArray = ['black','yellow','blue']; 

		$("#rectangle_color").click(function(){ 
			  index5++; 
			  if (index5==3){ 
			  		index5 = 0;
			  }

			  $("#Rectangle").css('outline-color',rectangleColorArray[index5]);

			})
	 
	 	var index6 = -1; 
		var rectangleColorArray = ['black','yellow','blue'];

		$("#rectangle_color").click(function(){ 
			  index6++; 
			  if (index6==3){  
			  		index6 = 0;
			  }

			  $("#RectangleLine1").css('background-color',rectangleColorArray[index6]);

			})
	 
	 	 	var index7 = -1; 
			var rectangleColorArray = ['black','yellow','blue']; 

	 		$("#rectangle_color").click(function(){ 
			  index7++; 
			  if (index7==3){ 
			  		index7 = 0;
			  }

			  $("#RectangleLine2").css('background-color',rectangleColorArray[index7]);

			})
	 

//RECTANGLE MOUSEOVER COLOR CHANGE FUNCTIONS:	 

		$(".rectangle_label").mouseover(function(){
				$("#Rectangle").addClass('hoverRectangleOutline');
				$("#RectangleLine1").addClass('hoverRectangleLine');
				$("#RectangleLine2").addClass('hoverRectangleLine');

		});

		$(".rectangle_label").mouseout(function(){
				$("#Rectangle").removeClass('hoverRectangleOutline');
				$("#RectangleLine1").removeClass('hoverRectangleLine');
				$("#RectangleLine2").removeClass('hoverRectangleLine');

		});



//BAR1 COLOR:

	 	var index15 = -1; 
		var barColorArray = ['black','yellow','blue']; 

		$("#bar1_color").click(function(){ 
			  index15++; 
			  if (index15==3){   
			  		index15 = 0;
			  }

			  $("#Bar1").css('background-color',barColorArray[index15]);

			})

//BAR1 MOUSEOVER COLOR CHANGE FUNCTIONS:	

			$(".bar1_label").mouseover(function(){
			$("#Bar1").addClass('hoverShapeFill');
			});

			$(".bar1_label").mouseout(function(){
			$("#Bar1").removeClass('hoverShapeFill');

			});
	 

//BAR2 COLOR:

	 	var index16 = -1; 
		var barColorArray = ['yellow','blue','black']; 

		$("#bar2_color").click(function(){ 
			  index16++; 
			  if (index16==3){  
			  		index16 = 0;
			  }

			  $("#Bar2").css('background-color',barColorArray[index16]);

			})

//BAR2 MOUSEOVER COLOR CHANGE FUNCTIONS:	

			$(".bar2_label").mouseover(function(){
			$("#Bar2").addClass('hoverShapeFill');
			});

			$(".bar2_label").mouseout(function(){
			$("#Bar2").removeClass('hoverShapeFill');

			});