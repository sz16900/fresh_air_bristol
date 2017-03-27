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
*/
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
