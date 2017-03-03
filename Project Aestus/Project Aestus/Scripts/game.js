var current = 0;
var picLat = 0;
var picLng = 0;

init();

function init()
{
    updatePicture();
}

function nextPicture()
{
    current = current + 1;
    updatePicture();
}

function updatePicture()
{
    document.getElementById("pic").src = photos[current].LargeUrl;
    document.getElementById("country").innerText = photoInfo[current].Country.Description;
    picLat = photoInfo[current].Latitude;
    picLng = photoInfo[current].Longitude;
    setPicMarker();
}

function guess()
{
    var latLng = marker.getPosition()
    var guessLat = latLng.lat();
    var guessLng = latLng.lng();

    var difference = calcDifference(picLat, picLng, guessLat, guessLng);
    document.getElementById("guessC").innerHTML = difference;
    showPicMarker();
    setPolyline(picLat, picLng, guessLat, guessLng);
}1