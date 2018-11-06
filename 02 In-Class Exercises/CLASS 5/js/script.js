


var students = ["Donya Aref", "Matthew Beaubien", "Abbey Chong", "Tess Dunn", "Justin Francisco", "Rachel Gilbert-O'Neil", "Andrea Gnanatheepan", "Christina Hayes", "Heesun Jung", "Lucia Kim", "Helen Kurnevich", "Connie Le", "Nhan Le", "Yubin Lee", "Jodie Leung", "Michelle Lu", "Joshua McKenna", "Jin ParkJoong", "Sam Rasmussen", "Minju Roh", "Lucy Son", "Nathaniel Tambakis", "Rebecca Wilkinson", "Justin Yoon", "Claire Zhang", "Yubai Zhang"]
var actions = ["Random", "Click", "Hover", "Show/Hide", "Cursor", "Scroll", "Type", "Drag", "Random", "Click", "Hover", "Show/Hide", "Cursor", "Scroll", "Type", "Drag", "Drag", "Scroll", "Type", "Cursor", "Hover", "Click", "Show/Hide", "Random", "Drag", "Scroll"]

var i=0;

while ( i<students.length) {

var toggle = 2; //create a var and set it to "2";


$("#styleToggle").click(function(){ //perform the following function when you click on something with the id


	var $styleFile = "css/style0"+toggle+".css" //creating a variable which is the name of the assigned style sheet based off the variable toggle
				

	$("#ourStylesheets").attr("href",$styleFile) //changing the attribute of the href attribute in the element "ourStylesheets"

	toggle = toggle+1 //adds 1 to the variable "toggle"

	if (toggle == 4) { //if it reaches 4, it goes back home to 1
		toggle = 1
	}

})


	console.log ( actions[i] )

$t = "<div class='listing'><div class='s'>"+ students[i] + " " + actions [i] + "</div></div>";
	
	//$t = "<div class='listing'><div class='s'>"+students[i]+"</div><div class='a'>"+actions[i]+"</div></div>";

	$("body").append($t);

	i = i+1


}


		var r = Math.floor(Math.random() * students.length)
		console.log(students[r])