            	var beaches = [
  ['Los Angeles', 34.0522, -118.2437, 4],
  ['New York City', 40.7128, -74.0059, 5],
  ['Boston', 42.3601, -151.157507, 3],
  ['Miami', 25.7617, -80.1918, 2],
  ['Pierre', 44.3683, -100.3510, 1],
  ['Austin', 30.2672, -97.7431, 1],
  ['Montgomery', 32.3668, -86.3000, 1],
  ['Cheyenne', 41.1400, -104.8202, 1]
];


      function initMap() {


        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 37.0902, lng: -95.7129},
            zoom: 4,
        });
    //       var marker = new google.maps.Marker({
		  //   position: nyc,
		  //   map: map,
		  //   title: 'Hello World!'
  		// });
          setMarkers(map);

      }


function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}



       // 	var la = {lat: 34.0522, lng: -118.2437};
      	// var nyc = {lat: 40.7128, lng: -74.0059};
      	// var bos = {lat: 42.3601, lng: -71.0589};
      	// var mia = {lat: 25.7617, lng: -80.1918};
      	// var pierre = {lat: 44.3683, lng: -100.3510};
      	// var austin = {lat: 30.2672, lng: -97.7431};
      	// var montgomery = {lat: 32.3668, lng: -86.3000};
      	// var cheyenne = {lat: 41.1400, lng: -104.8202};