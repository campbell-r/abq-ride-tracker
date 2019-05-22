// NOTE:
var mymap = L.map('mapid').setView([35.084877299999995,
          -106.6468263], 11.4),
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

var array;
var lines;

// NOTE: start of route 66 markers and tracking
var route66Busses = [];
function addRoute66(){
  fetch('http://data.cabq.gov/transit/realtime/route/route66.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route66Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: orangeIcon});
     mymap.addLayer(route66Busses[i]);
}
});
}

function route66(){
  fetch('http://data.cabq.gov/transit/realtime/route/route66.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    function setLatLng(){
      for(i=0;i<data.vehicles.length;i++){
       route66Busses[i].setLatLng([data.vehicles[i].latitude, data.vehicles[i].longitude]);
       route66Busses[i].bindPopup('<b>Bus: </b> #'+data.vehicles[i].vehicle_id+'. <br><b>Next stop: </b>'+data.vehicles[i].next_stop_name[0]);
      }

    }
    setLatLng();
});
}
// NOTE: start of route11 markers and tracking
var route11Busses = [];
function addRoute11(){
  fetch('http://data.cabq.gov/transit/realtime/route/route11.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route11Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: redIcon}).addTo(mymap);
     route11Busses[i].bindPopup('This is bus #'+data.vehicles[i].vehicle_id);
    }
});
}
// NOTE: start of route11 latitude and longitude fetching
function route11(){
  fetch('http://data.cabq.gov/transit/realtime/route/route11.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    function setLatLng(){
      for(i=0;i<data.vehicles.length;i++){
       route11Busses[i].setLatLng([data.vehicles[i].latitude, data.vehicles[i].longitude]);
       route11Busses[i].bindPopup('<b>Bus:</b> #'+data.vehicles[i].vehicle_id+'.<br> <b>Next stop: </b>'+data.vehicles[i].next_stop_name[0]);
      }
    }
    setLatLng();
});
}
// NOTE: start of route 8 markers and tracking
var route8Busses = [];
function addRoute8(){
  fetch('http://data.cabq.gov/transit/realtime/route/route8.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route8Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: blueIcon}).addTo(mymap);
     route8Busses[i].bindPopup('<b>Bus:</b> #'+data.vehicles[i].vehicle_id+'.<br> <b>Next Stop: </b>'+data.vehicles[i].next_stop_name[0]);
    }
});
}
// NOTE: start of route11 latitude and longitude fetching
function route8(){
  fetch('http://data.cabq.gov/transit/realtime/route/route8.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    function setLatLng(){
      for(i=0;i<data.vehicles.length;i++){
       route8Busses[i].setLatLng([data.vehicles[i].latitude, data.vehicles[i].longitude]);
      }
    }
    setLatLng();
});
}
// NOTE: start of route 8 markers and tracking
var route1Busses = [];
function addRoute1(){
  fetch('http://data.cabq.gov/transit/realtime/route/route1.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route1Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: purpleIcon}).addTo(mymap);
     route1Busses[i].bindPopup('<b>Bus:</b> #'+data.vehicles[i].vehicle_id+'.<br> <b>Next Stop: </b>'+data.vehicles[i].next_stop_name[0]);
    }
});
}
// NOTE: start of route11 latitude and longitude fetching
function route1(){
  fetch('http://data.cabq.gov/transit/realtime/route/route1.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    function setLatLng(){
      for(i=0;i<data.vehicles.length;i++){
       route1Busses[i].setLatLng([data.vehicles[i].latitude, data.vehicles[i].longitude]);
      }
    }
    setLatLng();
});
}
var route31Busses = [];
function addRoute31(){
  fetch('http://data.cabq.gov/transit/realtime/route/route31.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route31Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: greenIcon}).addTo(mymap);
     route31Busses[i].bindPopup('This is bus #'+data.vehicles[i].vehicle_id);
    }
});
}
// NOTE: start of route latitude and longitude fetching
function route31(){
  fetch('http://data.cabq.gov/transit/realtime/route/route31.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    function setLatLng(){
      for(i=0;i<data.vehicles.length;i++){
       route31Busses[i].setLatLng([data.vehicles[i].latitude, data.vehicles[i].longitude]);
       route31Busses[i].bindPopup('<b>Bus:</b> #'+data.vehicles[i].vehicle_id+'.<br> <b>Next stop: </b>'+data.vehicles[i].next_stop_name[0]);

      }
    }
    setLatLng();
});
}
// NOTE: polyline routing for 66
var route66Cords = [];
var route66Line = [];
var route66marker = [];
function drawRoute66(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);

    var cords = shapes.features[104].geometry.coordinates;
      for(i=0;i<cords.length;i++){
       route66marker[i] = L.marker([cords[i][1],cords[i][0]]);
       route66Cords.push(route66marker[i].getLatLng());
       route66Line[i] = L.polyline(route66Cords,{color: 'orange', smoothFactor: 1, opacity: 0.2});
       mymap.addLayer(route66Line[i]);
      }
  });
}
function drawRoute11(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var route11 = Array();
    var cords = shapes.features[7].geometry.coordinates;
      for(i=0;i<cords.length;i++){
       marker1 = L.marker([cords[i][1],cords[i][0]]);
       route11.push(marker1.getLatLng());
       polyline = L.polyline(route11,{color: 'red', smoothFactor: 1, opacity: 0.2}).addTo(mymap);
      }
  });
}
function drawRoute8(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var route8 = Array();
    var cords = shapes.features[118].geometry.coordinates;
      for(i=0;i<cords.length;i++){
       marker1 = L.marker([cords[i][1],cords[i][0]]);
       route8.push(marker1.getLatLng());
       polyline = L.polyline(route8,{color: 'blue', smoothFactor: 1, opacity: 0.2}).addTo(mymap);
      }
  });
}
function drawRoute1(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var route1 = Array();
    var cords = shapes.features[0].geometry.coordinates;
      for(i=0;i<cords.length;i++){
       marker1 = L.marker([cords[i][1],cords[i][0]]);
       route1.push(marker1.getLatLng());
       polyline = L.polyline(route1,{color: 'purple', smoothFactor: 1, opacity: 0.2}).addTo(mymap);
      }
  });
}
function drawRoute31(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var route66 = Array();
    var cords = shapes.features[72].geometry.coordinates;
      for(i=0;i<cords.length;i++){
       marker1 = L.marker([cords[i][1],cords[i][0]]);
       route66.push(marker1.getLatLng());
       polyline = L.polyline(route66,{color: 'green', smoothFactor: 1, opacity: 0.2}).addTo(mymap);
      }
  });
}
button1.addEventListener('click', function(){
  addRoute66();

  window.setInterval(function(){
    route66();
  }, 1000);
  drawRoute66();
});
button2.addEventListener('click', function(){
  addRoute11();
  window.setInterval(function(){
    route11();
  }, 1000);
  drawRoute11();

});
button3.addEventListener('click', function(){
  addRoute8();
  window.setInterval(function(){
    route8();
  }, 1000);
  drawRoute8();
});
button4.addEventListener('click', function(){
  addRoute1();
  window.setInterval(function(){
    route1();
  },1000);
  drawRoute1();
});
button5.addEventListener('click', function(){
  addRoute31();
  window.setInterval(function(){
    route31();
  }, 1000);
  drawRoute31();
});
button6.addEventListener('click', function(){
  console.log(route66Busses);
for(i=0;i<route66Busses.length;i++){
  mymap.removeLayer(route66Busses[i]);
}
for(i=0; i<route66Line.length;i++){
mymap.removeLayer(route66Line[i]);
}
console.log(route66Line);
});
button7.addEventListener('click', function(){
  marker7.openPopup();
});
button8.addEventListener('click', function(){
  if(route66Busses === []){
    alert('do something')
  }else{
    alert('undosomething')
  }
});
button9.addEventListener('click', function(){
  location.reload();
});
