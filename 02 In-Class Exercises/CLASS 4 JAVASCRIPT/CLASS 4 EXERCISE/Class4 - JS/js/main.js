//console.log ("hello")


//var mces = document.querySelector (".event") 


//mces.addEventListener ('click', function(){
	//alert("my first function you clicked on a lecture")
	//document.querySelector("body").style.cssText="background:red;"

//}) //closing the function

//the stuff above was annoying and not simplified.



// var bg = "rgb(255, 0, 0)";


// $ (".event").on('click', function () {

		// var currentBG = $("body").css("background-color")

		// if (currentBG == "rgb(255, 255, 255)") {
		// 	bg = "rgb(255, 0, 0)"

		// } else {

		// 	bg= "rgb(255, 255, 255)"


		// }

// 		// $("body").css("background",bg)

// })


var bg = "rgb(255, 0, 0)";


$ (".event").on('click', function (whatIShappening) {

		console.log(whatIShappening);
		$("event2").fadeOut(200)

	})



//