var map = null;
var marker = null;
var picMarker = null;

initMap();

function initMap()
{
    // Create map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 20, lng: 0},
        zoom: 3,
        minZoom: 3,
        disableDefaultUI: true,
        disableDoubleClickZoom: true
    });

    // Click to add marker functionality
    map.addListener('click', function(event)
    {
        if(marker)
        {
            marker.setMap(null);
            marker = null;
        }
        marker = new google.maps.Marker({ position: event.latLng });
        marker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
        marker.setMap(map);
    });
}

function setPicMarker()
{
    // Add current picture marker to map
    var picLatLng = { lat: picLat, lng: picLng };
    
    picMarker = new google.maps.Marker({
        position: picLatLng
    });
    picMarker.setMap(map);
    picMarker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
    picMarker.setVisible(false);
}

function showPicMarker()
{
    picMarker.setVisible(true);
    map.setCenter(picMarker.getPosition());
}

function setPolyline(lat1, lng1, lat2, lng2)
{
    var coordinates = [
        { lat: lat1, lng: lng1 },
        { lat: lat2, lng: lng2 }
    ];

    var polyline = new google.maps.Polyline({
        path: coordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3
    });

    polyline.setMap(map);
}