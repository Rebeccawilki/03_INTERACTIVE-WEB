
	//THIS SCALES THE ARTBOARD:

		scaleArtboard(); //calls the function the moment the page is loaded 


		$(window).resize(function(){
			scaleArtboard() 
		}) //calls the scaleArtboard function anytime someone resizes the window.



	//FUNCTION THAT ALLOWS PEOPLE TO EDIT THE CONTENT IN THE TEXT BOX IN THE ARTBOARD:

		$("#Title1").click(function(){
				$(this)
				.attr("contenteditable","true")
			}) //when you click on title format1, allow the user to edit the text content

		$("#Title2").click(function(){
				$(this)
				.attr("contenteditable","true")
			}) 

		$("#MainSub").click(function(){
				$(this)
				.attr("contenteditable","true")
			}) 


		$("#Sub2").click(function(){
				$(this)
				.attr("contenteditable","true")
			}) 

		$("#Sub3").click(function(){
				$(this)
				.attr("contenteditable","true")
			}) 

		$("#Paragraph").click(function(){
				$(this)
				.attr("contenteditable","true")
			}) 



	//FUNCTION FOR MAX LENGTH OF CHARACTERS IN TEXT BOXES:

		//SUBHEADER: 
			//Max total characters is 40 chars	
			//Max characters per line == 20 chars
			//if last word on line is broken, put it onto the second line
			//skip first line after 20 chars  
			//Max 2 lines total

			//var subheader_maxCharCount = 40;
			//var subheader_maxCharPerLine = 20;
			//var subheader_maxLines = 2

	




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
