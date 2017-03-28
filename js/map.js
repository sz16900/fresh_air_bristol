var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(51.454884,-2.592751),
    // mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://opendata.bristol.gov.uk/resource/mc7c-bzcy.json';
  document.getElementsByTagName('head')[0].appendChild(script);
  console.log(script);
}

// Need to append json file with an eqfeed_callback for function below??
// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  for (var i = 0; i < results.features.length; i++) {
    var coords = results.features[i].geometry.coordinates;
    var latLng = new google.maps.LatLng(coords[1],coords[0]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }
};




/*// Resets google map to center over Bristol.
function resetMap() {
    // Gets location of map in HTML.
    var mapDiv = document.getElementById("slide1");
    var iFrame = mapDiv.getElementsByTagName("mapIframe");

    map = new google.maps.Map(document.getElementById("iFrame"), {
          zoom: 14,
          center: new google.maps.LatLng(251.454884, -2.592751)
        });

    // Sets new Lat and Long position.
    var centerPos = new google.maps.LatLng("51.454884", "-2.592751");
    // Creates new map object.
    var map = new google.maps.Map(iFrame, centerPos);

    // Sets the center and zoom to object map.
    map.setOptions({
        center: centerPos,
        zoom: 14
    });
}

<script>
var airQuality;

var url = "https://opendata.bristol.gov.uk/resource/mc7c-bzcy.json";

function setup() {
    loadJSON(url, gotData);
}

function gotData(data) {
    println(data);
    console.log(airQuality.avg_no2);
    var airQuality = data;
}

function draw() {
    if (airQuality) {
        console.log(airQuality.avg_no2);
    }
}
</script>

var airQuality;

var url = "https://opendata.bristol.gov.uk/resource/mc7c-bzcy.json";

function setup() {
    loadJSON(url, gotData);
}

function gotData(data) {
    var airQuality = data;
}

function draw() {
    if (airQuality) {
        console.log(airQuality.avg_no2);
    }
}
*/
