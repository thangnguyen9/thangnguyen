const x = document.getElementById("show");
function getmylocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser";
    }

}
function position(toado) {
    x.innerHTML = "Latitude:" + toado.coords.latitude; "<br>Longitude:" + toado.coords.longtitude;

}