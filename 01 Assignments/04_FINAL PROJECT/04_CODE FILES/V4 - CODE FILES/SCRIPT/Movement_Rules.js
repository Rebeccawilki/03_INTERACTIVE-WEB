//console.log("hi");

//console.log(Math.random());

//console.log(Math.floor(Math.random() * 10 ) + 1); // 1 and 10

//Rule Set:
//-yPixelIncrement
//-xPixelIncrement
//-xPosition
//-yPosition
//-canMoveOnYAxis -> true -> leftEnabled || rightEnabled
//-canMoveOnXAxis -> true -> upEnabled || downEnabled

//var ruleSet = {
	//'yPixelIncrement': '',
	//'xPixelIncrement': '',
	//'xPosition':'',
	//'yPosition':'',
	//'canMoveOnXAxis':true,
	//'canMoveOnYAxis':true,
	//}

//var shapeRules = {
	//'LCircle': '',
	//'MCircle': '',
	//'SCircle': '',
	//'Rectangle1': '',
	//'Retangle2': '',
	//'Retangle2': '',
	//}



//button: #lcircle_placement

//actual object we are moving: #LCircle



//MOVING OBJECTS FUNCTION WEIRD ASS TRIAL:

//function storeCoordinate(xVal, yVal, array) {
//array.push({x: xVal, y: yVal});
//}


//var coords = [{x:25,y:50},{x:75,y:100},{x:100,y:250}];
//var index = -1; 

//	$("#lcircle_placement").click(function(){ //selecting lcircle_color and creating a click function associated with it
	

$("#lcircle_placement").click(function(){
//var coords = $("LCircle").
		  index++; // index = index +1
		  if (index==3){ //== is a comparative. this gives a conditional statement for when the index arrives at 2  
		  		index = 0;
		  }

	//$("#LCircle").css("top",coords[index].y+"px")
	//$("#LCircle").css("left",coords[index].x+"px")

$("#LCircle").css("top",(Math.floor(Math.random() * 1500 ) + 1)+"px")
$("#LCircle").css("left",(Math.floor(Math.random() * 1500 ) + 1)+"px")
}); 