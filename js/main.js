// NOTE:
var mymap = L.map('mapid').setView([35.084877299999995,
          -106.6468263], 13),
          tracking = {
              type: 'Feature',
              properties: {
                id: 1
              },
              geometry: {
                type: 'LineString',
                coordinates:[]
              }

          };
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FtcGJlbGxyIiwiYSI6ImNqdmlwNXYyejA4Y2c0OG9qYnAyanlxdncifQ.t6djm2dI83fR6xpD4G1lhQ'
}).addTo(mymap);

// NOTE: adding custom icon markers here
var orangeIcon = L.icon({
    iconUrl: 'https://gkv.com/wp-content/uploads/leaflet-maps-marker-icons/map_marker-orange-small.png',
    shadowUrl: '',

    iconSize:     [28, 34],  // size of the icon
    iconAnchor:   [12, 30],  // where the icon is anchored on the map
    popupAnchor:  [0, -28]
});
var redIcon = L.icon({
  iconUrl: 'icons/map_marker-red1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var blueIcon = L.icon({
  iconUrl: 'icons/map_marker-blue1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var purpleIcon = L.icon({
  iconUrl: 'icons/map_marker-purple1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var lightBlueIcon = L.icon({
  iconUrl: 'icons/map_marker-lightblue1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var greenIcon = L.icon({
  iconUrl: 'icons/map_marker-green1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var yellowIcon = L.icon({
  iconUrl: 'icons/map_marker-yellow1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var pinkIcon = L.icon({
  iconUrl: 'icons/map_marker-pink1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var greyIcon = L.icon({
  iconUrl: 'icons/map_marker-grey1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});
var blackIcon = L.icon({
  iconUrl: 'icons/map_marker-black1.png',
  shadowUrl: '',

  iconSize:     [28, 34],  // size of the icon
  iconAnchor:   [12, 30],  // where the icon is anchored on the map
  popupAnchor:  [0, -28]
});



// marker.bindPopup("<b>Bus route starts here!</b>").openPopup();
// NOTE: adding initial map markers here;
 var marker1 = L.marker([0,0], {icon: orangeIcon}).addTo(mymap);
 var marker2 = L.marker([0,0], {icon: redIcon}).addTo(mymap);
 var marker3 = L.marker([0,0],{icon: blueIcon}).addTo(mymap);
 var marker4 = L.marker([0,0], {icon: purpleIcon}).addTo(mymap);
 var marker5 = L.marker([0,0], {icon: greenIcon}).addTo(mymap);
 var marker6 = L.marker([0,0], {icon: yellowIcon}).addTo(mymap);
 var marker7 = L.marker([0,0], {icon: pinkIcon}).addTo(mymap);
 var marker8 = L.marker([0,0], {icon: greyIcon}).addTo(mymap);
 var marker9 = L.marker([0,0], {icon: blackIcon}).addTo(mymap);

// NOTE: button variables
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');
var button9 = document.getElementById('button9');

function bus(id, lat, long, stop) {
  this.routeID = id;
  this.latitude = lat;
  this.longitude = long;
  this.nextStop = stop;
}
var pointA = new L.LatLng(35.02505,-106.711432);
var pointB = new L.LatLng(35.024914,-106.712002);
var pointC = new L.LatLng(35.024886,-106.712442);
var pointD = new L.LatLng(35.024887,-106.712443);
var pointE = new L.LatLng(35.024778,-106.712931);
var pointList = [pointA,pointB,pointC,pointD,pointE];
var firstpolyline = new L.polyline(pointList, {
  color: 'red',
  weight: 3,
  opacity: .7,
  smoothFactor: 1
});
firstpolyline.addTo(mymap);
var array;
var lines;


var route2 = Array();

function getRoute1(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    var route1 = Array();
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var cords = shapes.features[0].geometry.coordinates;
    console.log(cords);
      for(i=0;i<cords.length;i++){
       marker1 = L.marker([cords[i][1],cords[i][0]]);
       route1.push(marker1.getLatLng());
       var polyline = L.polyline(route1,{color: 'orange'}).addTo(mymap);

      }
  });
}
function getRoute2(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    var route2 = Array();
    // route1.length = Math.min(route2.length, 249);
    var cords = shapes.features[1].geometry.coordinates;
    console.log(cords);
      for(i=0;i<cords.length;i++){
       marker2 = L.marker([cords[i][1],cords[i][0]]);
       route2.push(marker2.getLatLng());
       var polyline = L.polyline(route2,{color: 'red'}).addTo(mymap);

      }
  });
}
function getRoute3(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    var route3 = Array();
    // route1.length = Math.min(route2.length, 249);
    var cords = shapes.features[2].geometry.coordinates;
    console.log(cords);
      for(i=0;i<cords.length;i++){
       marker3 = L.marker([cords[i][1],cords[i][0]]);
       route3.push(marker3.getLatLng());
       var polyline = L.polyline(route3,{color: 'blue'}).addTo(mymap);

      }
  });
}

function getMyData(){
  fetch('http://data.cabq.gov/transit/realtime/route/allroutes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var bus1 = new bus(data.allroutes[0].route_short_name, data.allroutes[0].latitude, data.allroutes[0].longitude, data.allroutes[0].next_stop_name);

    //start of bus 2
    var bus2 = new bus(data.allroutes[1].route_short_name, data.allroutes[1].latitude, data.allroutes[1].longitude, data.allroutes[1].next_stop_name);
    //start of bus 3
    var bus3 = new bus(data.allroutes[2].route_short_name, data.allroutes[2].latitude, data.allroutes[2].longitude, data.allroutes[2].next_stop_name);
    //start of bus 4
    var bus4 = new bus(data.allroutes[3].route_short_name, data.allroutes[3].latitude, data.allroutes[3].longitude, data.allroutes[3].next_stop_name);
    //start of bus 5
    var bus5 = new bus(data.allroutes[4].route_short_name, data.allroutes[4].latitude, data.allroutes[4].longitude, data.allroutes[4].next_stop_name);
    //start of bus 6
    var bus6 = new bus(data.allroutes[5].route_short_name, data.allroutes[5].latitude, data.allroutes[5].longitude, data.allroutes[5].next_stop_name);
    //start of bus 7
    var bus7 = new bus(data.allroutes[6].route_short_name, data.allroutes[6].latitude, data.allroutes[6].longitude, data.allroutes[6].next_stop_name);
    //start of bus 8
    var bus8 = new bus(data.allroutes[7].route_short_name, data.allroutes[7].latitude, data.allroutes[7].longitude, data.allroutes[7].next_stop_name);
    //start of bus 9
    var bus9 = new bus(data.allroutes[8].route_short_name, data.allroutes[8].latitude, data.allroutes[8].longitude, data.allroutes[8].next_stop_name);



    //updating the the markers latitude and longitude using the constructed bus objects
    marker1.setLatLng([bus1.latitude, bus1.longitude]);
    marker2.setLatLng([bus2.latitude, bus2.longitude]);
    marker3.setLatLng([bus3.latitude, bus3.longitude]);
    marker4.setLatLng([bus4.latitude, bus4.longitude]);
    marker5.setLatLng([bus5.latitude, bus5.longitude]);
    marker6.setLatLng([bus6.latitude, bus6.longitude]);
    marker7.setLatLng([bus7.latitude, bus7.longitude]);
    // marker8.setLatLng([bus8.latitude, bus8.longitude]);
    // marker9.setLatLng([bus9.latitude, bus9.longitude]);

    //updating the markers with correct popup information
    marker1.bindPopup('<b>Bus: </b>'+bus1.routeID+'<br> <b> Next stop:</b> '+bus1.nextStop);
    marker2.bindPopup('<b>Bus: </b>'+bus2.routeID+'.<br><b> Next stop is: </b>'+bus2.nextStop);
    marker3.bindPopup('<b>Bus: </b>'+bus3.routeID+'.<br><b> Next stop is: </b>'+bus3.nextStop);
    marker4.bindPopup('<b>Bus: </b>'+bus4.vehicleID+'.<br><b> Next stop:</b> '+bus4.nextStop);
    marker5.bindPopup('<b>Bus: </b>'+bus5.vehicleID+'.<br><b> Next stop:</b> '+bus5.nextStop);
    marker6.bindPopup('<b>Bus: </b>'+bus6.vehicleID+'.<br><b> Next stop: </b>'+bus6.nextStop);
    marker7.bindPopup('<b>Bus: </b>'+bus7.vehicleID+'.<br><b> Next stop: </b>'+bus7.nextStop);
    marker8.bindPopup('<b>Bus: </b>'+bus8.vehicleID+'.<br><b> Next stop: </b>'+bus8.nextStop);
    marker9.bindPopup('<b>Bus: </b>'+bus9.vehicleID+'.<br><b> Next stop: </b>'+bus9.nextStop);
    // updating the inner HTML values of the buttons with the correct vehicle identification

  });

}
window.setInterval(function(){
getMyData();
}, 1000);
 getMyData();

function getBusNumbers(){
  fetch('http://data.cabq.gov/transit/realtime/route/allroutes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var bus1 = new bus(data.allroutes[0].route_short_name, data.allroutes[0].latitude, data.allroutes[0].longitude, data.allroutes[0].next_stop_name);
    //start of bus 2
    var bus2 = new bus(data.allroutes[1].route_short_name, data.allroutes[1].latitude, data.allroutes[1].longitude, data.allroutes[1].next_stop_name);
    //start of bus 3
    var bus3 = new bus(data.allroutes[2].route_short_name, data.allroutes[2].latitude, data.allroutes[2].longitude, data.allroutes[2].next_stop_name);
    //start of bus 4
    var bus4 = new bus(data.allroutes[3].route_short_name, data.allroutes[3].latitude, data.allroutes[3].longitude, data.allroutes[3].next_stop_name);
    //start of bus 5
    var bus5 = new bus(data.allroutes[4].route_short_name, data.allroutes[4].latitude, data.allroutes[4].longitude, data.allroutes[4].next_stop_name);
    //start of bus 6
    var bus6 = new bus(data.allroutes[5].route_short_name, data.allroutes[5].latitude, data.allroutes[5].longitude, data.allroutes[5].next_stop_name);
    //start of bus 7
    var bus7 = new bus(data.allroutes[6].route_short_name, data.allroutes[6].latitude, data.allroutes[6].longitude, data.allroutes[6].next_stop_name);
    // start of bus 8
    var bus8 = new bus(data.allroutes[7].route_short_name, data.allroutes[7].latitude, data.allroutes[7].longitude, data.allroutes[7].next_stop_name);
    //start of bus 9
    var bus9 = new bus(data.allroutes[8].route_short_name, data.allroutes[8].latitude, data.allroutes[8].longitude, data.allroutes[8].next_stop_name);

    button1.innerHTML = 'Route: '+bus1.routeID;
    button2.innerHTML = 'Route: '+bus2.routeID;
    button3.innerHTML = 'Route: '+bus3.routeID;
    button4.innerHTML = 'Route: '+bus4.routeID;
    button5.innerHTML = 'Route: '+bus5.routeID;
    button6.innerHTML = 'Route: '+bus6.routeID;
    button7.innerHTML = 'Route: '+bus7.routeID;
    button8.innerHTML = 'Route: '+bus8.routeID;
    button9.innerHTML = 'Route: '+bus9.routeID;

    if(bus1.routeID === '1'){
      marker1.L.Icon(orangeIcon);
    }
    if(bus2.routeID === '1'){
      marker2.L.marker({icon: orangeIcon});
    }
  });
}
getBusNumbers();
//NOTE: event listeners for button clicks to popup bus location
button1.addEventListener('click', function(){
  marker1.openPopup();
  getRoute1();
});
button2.addEventListener('click', function(){
  marker2.openPopup();
  getRoute2();
});
button3.addEventListener('click', function(){
  marker3.openPopup();
  getRoute3();
});
button4.addEventListener('click', function(){
  marker4.openPopup();
});
button5.addEventListener('click', function(){
  marker5.openPopup();
});
button6.addEventListener('click', function(){
  marker6.openPopup();
});
button7.addEventListener('click', function(){
  marker7.openPopup();
});
button8.addEventListener('click', function(){
  marker8.openPopup();
});
button9.addEventListener('click', function(){
  marker9.openPopup();
});
