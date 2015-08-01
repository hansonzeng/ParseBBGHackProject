var map;

function initialize() {
	var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
	
	var mapOptions = {
		zoom: 4,
		center: myLatlng
	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Hello World!'
	});
	
	codeAddress();
	
	console.log(getAllCities());
}

var geocoder = new google.maps.Geocoder();

function codeAddress() {
    var address = "London, UK";
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }

google.maps.event.addDomListener(window, 'load', initialize);
