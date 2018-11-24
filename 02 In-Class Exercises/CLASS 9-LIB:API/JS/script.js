//alert("ffff")

$apiURL = "https://api.openweathermap.org/data/2.5/weather?q=TORONTO,CA&appid=e8a350200116edd66dd451686c1cbb08"

//BELOW IS AN ajaxcall - after a page has loaded it will load more things!

$.ajax ({
	url: $apiURL,
	success:function(cData){
		console.log (cData.main.temp);
		celcius = (cData.main.temp - 273.15).toFixed(2);
		
	$("#temp").html("the temperature is " +celcius +"&#x2103;")
		
		}
		})




//$speed = 500

//$("#section1").click(function(){
//$(window).scrollTo("#section2", $speed);
//})

//$("#section2").click(function(){
//$(window).scrollTo("#section1", $speed);
//})

//$("#A").click(function(){
//$(window).scrollTo("#C", $speed);
//})


//$("#C").click(function(){
//$(window).scrollTo("#A", $speed);
//})

