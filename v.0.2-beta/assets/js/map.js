// map
var map = L.map('map').
setView([20.6737777, -103.405454],
9);
L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
maxZoom: 19,
accessToken: 'xxxApiTOKENxxx'
}).addTo(map);
var iconJHN = L.icon({
    iconUrl: 'https://jonatanhn.tk/assets/img/punto.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [90, 90], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [50, 115], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


L.marker([20.6304368, -103.3090282], {icon: iconJHN}).addTo(map);

var circle = L.circle([20.6304368, -103.3090282], {
    color: '#2ecc71',
    fillColor: '#222',
    fillOpacity: 0.5,
    radius: 25000
}).addTo(map);
