
i =0; //a variable equalling 0.

while(i < 5000) { //keep doing this code until i = 5000
	$(".container").append("<div class='blackSquare'></div>"); //selecting the "body" and adding a black square
	i = i+1; //adding one to i
}


$(".blackSquare").hover(function(){ //selecting all black squares and binding a hover function to each of them
	
	$(this)	//seclet the particular black square that you've hovered over
		.css({ //change the CSS
		"opacity":0, //set the opacity to zero
		 "pointer-events": "none" //make this black square uninteractable
	}) //closing the css ACTION
}) //closing the hover function

