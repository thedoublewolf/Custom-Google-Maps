function initMap() {
  var myLatLng = {lat: 33.848528, lng: -84.373106}

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 17,
    maxZoom: 20
  });

  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

  var image = {
    url: 'images/moving.png',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(50, 50)
  };

  var contentString =
      '<div class="infocontent">'+
      '<h1 class="infoheading">Asset</h1>'+
      '</div>'
      ;

  var infoBubble = new InfoBubble({
    maxWidth: 300,
    content: contentString,
    shadowStyle: 0,
    padding: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 2,
    arrowSize: 20,
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,0.6)',
    disableAutoPan: true,
    arrowPosition: 30,
    arrowStyle: 2,
    disableAnimation: true
  });

  function addMarker(location, map) {
    var marker = new google.maps.Marker({
      position: location,
      animation: google.maps.Animation.DROP,
      map: map,
      icon: image
    });
    marker.addListener('click', function() {
      infoBubble.open(map, marker);
    });
  }
}