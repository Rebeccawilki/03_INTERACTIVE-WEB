

//CONNECTS ROTATE BUTTONS WITH THE ROTATE FUNCTION


		$("#title1_rotate").click(function(){
			customRotate("#Title1")
		}) //anytime you click on the titlerotate button it executes the custom function


		$("#title2_rotate").click(function(){
			customRotate("#Title2")
		}) 


		$("#mainsub_rotate").click(function(){
			customRotate("#MainSub")
		}) 


		$("#rectangle_rotate").click(function(){
			customRotate("#Rectangle")
		}) 


		$("#sub2_rotate").click(function(){
			customRotate("#Sub2")
		})
		
		$("#sub3_rotate").click(function(){
			customRotate("#Sub3")
		})

		$("#para_rotate").click(function(){
			customRotate("#Paragraph")
		})

		$("#bar1_rotate").click(function(){
			customRotate("#Bar1")
		})

		$("#bar2_rotate").click(function(){
			customRotate("#Bar2")
		})




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

