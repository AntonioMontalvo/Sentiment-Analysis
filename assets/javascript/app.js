 ////////////CITIES ARRAY////////////////////
  var cities = [
	  ['Los Angeles', 34.0522, -118.2437],
	  ['New York City', 40.7128, -74.0059],
	  ['Boston', 42.3601, -151.157507],
	  ['Miami', 25.7617, -80.1918],
	  ['Pierre', 44.3683, -100.3510],
	  ['Austin', 30.2672, -97.7431],
	  ['Montgomery', 32.3668, -86.3000],
	  ['Cheyenne', 41.1400, -104.8202]
  ];

/////////ADD TEXT CONTENT//////////////////
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">XCit shows the following sentiment for your search</h1>'+
      '<div id="bodyContent">'+
     
      '</div>';



/////////SET THE MAP////////////////////////
      function initMap() {

        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 37.0902, lng: -95.7129},
            zoom: 4,
            styles: [
				      {
				        featureType: 'all',
				        stylers: [
				          { saturation: -80 }
				        ]
				      },{
				        featureType: 'road.arterial',
				        elementType: 'geometry',
				        stylers: [
				          { hue: '#00ffee' },
				          { saturation: 90 }
				        ]
				      },{
				        featureType: 'poi.business',
				        elementType: 'labels',
				        stylers: [
				          { visibility: 'on' }
				        ]
				      }
				    ]
        });

 
        setMarkers(map); //CALL THE MARKERS

      }


function setMarkers(map) {//THIS FUNCTION ADDS MARKERS TO THE MAP
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: ' https://www.google.com/mapfiles/marker.png',
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
  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    var marker = new google.maps.Marker({
      position: {lat: city[1], lng: city[2]},
      map: map,
      icon: image,
      shape: shape,
      title: city[0], 
    });

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  }
   marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

}

