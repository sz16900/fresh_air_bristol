// Javascript will contain functions for querying the json data file.
// Bristol council API app token: xZKWYI0zglZQ5dj95RiYGzsHu

$(window).on('load', function() {
    // Construct the query string
    url = 'https://opendata.bristol.gov.uk/resource/mc7c-bzcy.json?'
        + '$$app_token=xZKWYI0zglZQ5dj95RiYGzsHu';

    // Intialize our map
    var center = new google.maps.LatLng(51.454884,-2.592751);
    var mapOptions = {
        zoom: 13,
        center: center
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Retrieve our data and plot it
    $.getJSON(url, function(data, textstatus) {
        $.each(data, function(i, entry) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(entry.location.coordinates[1],
                                                 entry.location.coordinates[0]),
                map: map,
                title: location.monitor_description
            });
        });
    });
});
