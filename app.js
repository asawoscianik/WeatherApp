
	var api = 'https://fcc-weather-api.glitch.me/api/current?'
	var lat ;
	var lon ;

$(document).ready(function(){	

	var $temperatura = $('#temperatura');
	var $wiatr = $('#wiatr');
	var $city = $('#miasto');
	var $cisnienie = $('#cisnienie');
	var $ikona = $('#ikona');
	var $wilgoc = $('#wilgotnosc');
	
	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
	
	var lat = "lat=" + position.coords.latitude;
    var lon = "lon=" + position.coords.longitude;
	getWeather(lat, lon);
  });
 
 }	

	function getWeather(lat, lon) {
		var url	= api + lat + "&" + lon;
		console.log(url);
		$.ajax({
			type: 'GET',
			url: url,
			
			success: function(result){	
			
			$city.append(result.name);
			$temperatura.append('<br>' + result.main.temp + ' C');
			$cisnienie.append('<br>' +result.main.pressure + ' hPa');
			$wiatr.append('<br>' + result.wind.speed + ' m/s');
			$wilgoc.append('<br>' + result.main.humidity + ' %');
			$ikona.append('<img src="' + result.weather[0].icon + '"/>');

			}
	
		});
		
	}

});