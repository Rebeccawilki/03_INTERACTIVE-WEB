//alert("ffff")

$apiURL = "https://samples.openweathermap.org/data/2.5/weather?q=Toronto,ca&appid=e8a350200116edd66dd451686c1cbb08"

$speed = 500

$("#section1").click(function(){
$(window).scrollTo("#section2", $speed);
})

$("#section2").click(function(){
$(window).scrollTo("#section1", $speed);
})

$("#A").click(function(){
$(window).scrollTo("#C", $speed);
})


$("#C").click(function(){
$(window).scrollTo("#A", $speed);
})

