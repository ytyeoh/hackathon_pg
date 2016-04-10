
var x = document.getElementById("demo");
$(document).ready(function() {
    function getLocation(err) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            return(err);
        }
    };
    
    function showPosition(position) {
        x.innerHTML =  "Search: Latitude: " + position.coords.latitude + " "
        "Longitude: " + position.coords.longitude;
    };

    function passJson() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://wowapp2.herokuapp.com/locations.json", true);
        xmlhttp.send(JSON.stringify(x.innerHTML));
    };
    passJson();
});
