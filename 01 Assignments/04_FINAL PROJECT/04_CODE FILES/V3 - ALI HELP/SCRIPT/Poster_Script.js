
//THIS SCALES THE ARTBOARD:

scaleArtboard(); //calls the function the moment the page is loaded 


$(window).resize(function(){
	scaleArtboard() 
}) //calls the scaleArtboard function anytime someone resizes the window.



//NONE OF THIS BELOW IS WORKING - VERY ANNOYING!:

//$(".title1Color").click(function(){
  //  $(".title1").css('font-color', 'blue');

  //})

//$(".title1Color").click(function (){
	//$(".title1").toggleClass('blue' 'yellow');


//})

//$(document).ready(function(){
  //  $("p").toggle(
    //    function()

//$("title1Color").toggle (

//	function(){$("title1").css({"color":"blue"});},
//	function(){$("title1").css({"color":"yellow"});},
//	function(){$("title1").css({"color":"black"});},


//});

//ALLOWS PEOPLE TO EDIT THE CONTENT IN THE TEXT BOX:

$("#title1").click(function(){
	$(this)
		.attr("contenteditable","true")
}) //when you click on title format1, allow the user to edit the text content



//$("#Titleformat1").on('input',function(){
	//$txt = $(this).text();

	//$("#title1").text($txt)

//}) //connects what you are typing in the titleformat 1 button the type appears on the arboard


$("#title1Rotate").click(function(){

	customRotate("#title1")

}) //anytime you click on the titlerotate button it executes the custom function



$("#title2Rotate").click(function(){

	customRotate("#title2")

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
