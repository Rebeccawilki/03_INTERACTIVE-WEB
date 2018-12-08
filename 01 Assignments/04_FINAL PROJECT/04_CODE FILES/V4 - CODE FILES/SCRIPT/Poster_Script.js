
//THIS SCALES THE ARTBOARD:

	scaleArtboard(); //calls the function the moment the page is loaded 


	$(window).resize(function(){
		scaleArtboard() 
	}) //calls the scaleArtboard function anytime someone resizes the window.



//TEXT COLOR CLICK FUNCTION:

//TITLE1:

	var index = -1; //creating a variable that starts the index at the first element in the array (0=blue) 
	var titleColorArray = ['blue','yellow','black']; //creating an array of colors


	$("#title1_color").click(function(){ //selecting title1Color and creating a click function associated with it
		  
		  index++; // index = index +1
		  if (index==3){ //== is a comparative. this gives a conditional statement for when the index arrives at 2  
		  		index = 0;
		  }

	$("#Title1").css('color',titleColorArray[index]); //selecting title1 and changes the title1 color attribute based on the array index
		  $("#Title1").css('-webkit-text-stroke-color',titleColorArray[index]); //associating the stroke color with the color
		})


//TITLE2:

	var index = -1; //creating a variable that starts the index at the first element in the array (0=blue) 
	var titleColorArray = ['blue','yellow','black']; //creating an array of colors


	$("#title2_color").click(function(){ //selecting title1Color and creating a click function associated with it
		  
		  index++; // index = index +1
		  if (index==3){ //== is a comparative. this gives a conditional statement for when the index arrives at 2  
		  		index = 0;
		  }

	$("#Title2").css('color',titleColorArray[index]); //selecting title1 and changes the title1 color attribute based on the array index
		  $("#Title2").css('-webkit-text-stroke-color',titleColorArray[index]); //associating the stroke color with the color
		})



//TEXT STROKE/FILL FUNCTION

	var isStroked = false; //indicates the default type style as not stroked


//TITLE1:

	$("#title1_fill").click(function(){ //selecting titl1fill button and creating a click function with it
			if (isStroked == false){ //is a comparative, saying if isStroked is false...
				isStroked = true; //then when you click on it it goes to isStroked is true
			$("#Title1").css('-webkit-text-stroke-width', '4px');
			$("#Title1").css('-webkit-text-stroke-color', titleColorArray[index]);
			$("#Title1").css('-webkit-text-fill-color','white');
		    }else{ //when the stroke is true, when you click on it, it goes back to the false (default) setting
		    	isStroked = false;
			$("#Title1").css('-webkit-text-stroke-color','none');
			$("#Title1").css('-webkit-text-fill-color',titleColorArray[index]);
			$("#Title1").css('-webkit-text-stroke-width', '0px');
		    }
		})

//TITLE2:

		$("#title2_fill").click(function(){ //selecting titl1fill button and creating a click function with it
			if (isStroked == false){ //is a comparative, saying if isStroked is false...
				isStroked = true; //then when you click on it it goes to isStroked is true
			$("#Title2").css('-webkit-text-stroke-width', '4px');
			$("#Title2").css('-webkit-text-stroke-color', titleColorArray[index]);
			$("#Title2").css('-webkit-text-fill-color','white');
		    }else{ //when the stroke is true, when you click on it, it goes back to the false (default) setting
		    	isStroked = false;
			$("#Title2").css('-webkit-text-stroke-color','none');
			$("#Title2").css('-webkit-text-fill-color',titleColorArray[index]);
			$("#Title2").css('-webkit-text-stroke-width', '0px');
		    }
		})

//CIRCLE COLOR FUNCTIONS:


	var index = -1; //creating a variable that starts the index at the first element in the array (0=black) 
	var circleColorArray = ['black','yellow','blue']; //creating an array of colors

	$("#lcircle_color").click(function(){ //selecting lcircle_color and creating a click function associated with it
		  index++; // index = index +1
		  if (index==3){ //== is a comparative. this gives a conditional statement for when the index arrives at 2  
		  		index = 0;
		  }

	$("#LCircle").css('background-color',circleColorArray[index]); //selecting title1 and changes the title1 color attribute based on the array index
		})


//CIRCLE FILL/OUTLINE FUNCTIONS:

	var CircleisStroked = false; //indicates the default type style as not stroked

	
	$("#circle_fill").click(function(){ //selecting titl1fill button and creating a click function with it
			if (CircleisStroked == false){ //is a comparative, saying if isStroked is false...
				CircleisStroked = true; //then when you click on it it goes to isStroked is true
			$("#LCircle").css('outline', '4px', circleColorArray[index]);
			$("#LCircle").css('background-color','white');
		    }else{ //when the stroke is true, when you click on it, it goes back to the false (default) setting
		    	isStroked = false;
			$("#LCircle").css('outline','0px');
			$("#LCircle").css('background-color', circleColorArray[index]);
		    }
		})

//FUNCTION THAT ALLOWS PEOPLE TO EDIT THE CONTENT IN THE TEXT BOX IN THE ARTBOARD:

	$("#Title1").click(function(){
			$(this)
			.attr("contenteditable","true")
		}) //when you click on title format1, allow the user to edit the text content

	$("#Title2").click(function(){
			$(this)
			.attr("contenteditable","true")
		}) 

//CONNECTS #titlerotate BUTTON WITH THE ROTATE FUNCTION


	$("#title1_rotate").click(function(){
		customRotate("#Title1")
	}) //anytime you click on the titlerotate button it executes the custom function



	$("#title2_rotate").click(function(){
		customRotate("#Title2")
	}) //anytime you click on the titlerotate button it executes the custom function



//ROTATE FUNCTION CODE HERE BELOW:

	function customRotate(ourElement) { //ourelement is a local variable only being used in the function here below
		rSoFar = parseInt( $(ourElement).attr("data-rotate") ); //grabs element title 1 and reads the arttribute data-rotate and turns it into an integer

		rSoFar = rSoFar+90; //adds 90 to that variavle

		if (rSoFar==360) { rSoFar = 0} //if the rsofar reaches 360, set it to zero

			var $rotateCss = "rotate("+rSoFar+"deg)"

		$(ourElement) //grabs ourelement 
			.attr("data-rotate",rSoFar) //changes the attribute i HTML
			.css({
				"transform":$rotateCss //rotates the element by rsofar
			})
		}



//ARTBOARD SCALING FUNCTION HERE BELOW:

	function scaleArtboard() { //creates a custom functon that sales the artboard

		var $artboard = $("#artboard") // creates the varible artboart and links it to my artboard object

		var $aHeight = $artboard.height() //sets a variable to the height of the artboard

		var $wHeight = $(window).height() //sets a variable to the height of the window

		var $scaleRatio = $wHeight/$aHeight //sets a variable to a ration that the artboard needs to scale to in order to firt in the window

		var scaleCSS = "scale("+$scaleRatio+")" //sets a variable that adjust the CSS to the scale ratio

		$artboard.css({
			"transform":scaleCSS
		}) //uses the scale variable to adjust the CSS

	}
