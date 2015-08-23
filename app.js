var map;
function loadMap(){
    map = L.map('map').setView([40.759851,-73.990618], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 18,
		id: 'debakel.in6i4ino',
		accessToken: 'pk.eyJ1IjoiZGViYWtlbCIsImEiOiJjMWVJWEdFIn0.WtaUd8Rh0rgHRiyEZNzSjQ'
	}).addTo(map);

	L.control.locate().addTo(map);
	var sidebar = L.control.sidebar('sidebar').addTo(map);
}
window.onload = loadMap();

L.mapbox.accessToken = 'pk.eyJ1IjoiZGViYWtlbCIsImEiOiJjMWVJWEdFIn0.WtaUd8Rh0rgHRiyEZNzSjQ';
//var featureLayer = L.mapbox.featureLayer().addTo(map);
//featureLayer.loadURL("data/Theater.geojson");

var geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "id": 0,
            "properties": {
                "name": "EDEKA Weiß",
                "address": "Salomon-Idler-Str. 4",
                "upvotes": 36,
                "downvotes": 2,
                "tags": ["Gemüse", "Brot", "Bio"],
                comments: [
                    {"name": "Ulrich", "date": "24.12.2014", "comment": "Hier gibt's viel zu holen!"},
                    {"name": "Hans", "date": "12.09.2014", "comment": "Sogar Bananen!"},
                    {"name": "Klaus", "date": "14.12.2014", "comment": "Und Brot!"}
                ]


            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.990618,
                    40.759851
                ]
            }
        },
        {
            "type": "Feature",
            "id": 1,
            "properties": {
                "name": "Tengelmann",
                "address": "Salomon-Idler-Str. 4",
                "upvotes": 3,
                "downvotes": 0,
                "tags": ["Gemüse", "Brot", "Bio"],
                comments: [
                    {"name": "Ulrich", "date": "24.12.2014", "comment": "Sehr lecker."},
                    {"name": "Hans", "date": "12.09.2014", "comment": "Nur zu empfehlen!"}
                ]

            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.988106,
                    40.760471
                ]
            }
        }
    ]
};

var template_source   = $("#market-template").html();
var template = Handlebars.compile(template_source);

function onEachFeature(feature, layer){
    var context = feature.properties;
    var html    = template(context);
    layer.bindPopup(html);
}
L.geoJson(geojson, {onEachFeature: onEachFeature}).addTo(map);