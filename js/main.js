function initialize() {
  var center = new google.maps.LatLng(48.091534,15.5116439);

  var snazzyStyle = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
   
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    minZoom: 3,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: snazzyStyle
  });

  // Creates custom icon image
  var image = {
    url: 'images/moving.png',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(30, 30)
  };

  // Content for infoBubble
  var contentString =
      '<div class="infocontent">'+
      '<h1 class="infoheading">Asset</h1>'+
      '</div>'
      ;

  // Find content from JSON data

  // Custom infoBubble
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

  // function addMarker(location, map) {

  //   var markers = [];

  //   var marker = new google.maps.Marker({
  //     position: location,
  //     animation: google.maps.Animation.DROP,
  //     map: map,
  //     icon: image
  //   });

  //   marker.addListener('click', function() {
  //     infoBubble.open(map, marker);
  //   });
  // }

  // google.maps.event.addListener(map, 'click', function(event) {
  //   addMarker(event.latLng, map);
  // });

  var markers = [];
  for (var i = 0; i < 1000; i++) {
    var dataPhoto = data.photos[i];
    var latLng = new google.maps.LatLng(dataPhoto.latitude,
              dataPhoto.longitude);
    var marker = new google.maps.Marker({
      position: latLng,
      icon: image
    });

    markers.push(marker);
  }

  var clusterStyles = [
    {
      textColor: 'white',
      url: 'images/small.png',
      height: 40,
      width: 40,
      backgroundPosition: "100px 0"
    },
   {
      textColor: 'white',
      url: 'images/medium.png',
      height: 50,
      width: 50,
      backgroundPosition: "100px 0"
    },
   {
      textColor: 'white',
      url: 'images/large.png',
      height: 60,
      width: 60,
      backgroundPosition: "100px 0"
    }
  ];

  var mcOptions = {
    gridSize: 50,
    styles: clusterStyles,
    maxZoom: 20
  };

  var markerCluster = new MarkerClusterer(map, markers, mcOptions);
}














