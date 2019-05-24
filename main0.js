// NOTE:
var mymap = L.map('mapid').setView([35.084877299999995,
          -106.6468263], 11.4);

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

// NOTE: all the busses global arrays
var route66Busses = [];
var route11Busses = [];
var route8Busses = [];
var route1Busses = [];
var route31Busses = [];
// NOTE: all the polyline global arrays
var route66Line = [];
var route11Line = [];
var route8Line = [];
var route1Line = [];
var route31Line = [];


// NOTE: bus object creator
function bus(id, lat, long, stop) {
  this.routeID = id;
  this.latitude = lat;
  this.longitude = long;
  this.nextStop = stop;
}

var array;
var lines;

// NOTE: start of route 66 markers and tracking

function addRoute66(){
  fetch('http://data.cabq.gov/transit/realtime/route/route66.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // route66Busses.length = Math.min(route66busses.length, 249);
    for(i=0;i<data.vehicles.length;i++){
     route66Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: orangeIcon});

}
});
}
var allStopsMarkers = [];
function addAllStops(){
  fetch('data/stops.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    for(i=0;i<data.length;i++){
    allStopsMarkers[i] = L.marker([data[i].stop_lat, data[i].stop_lon]).addTo(mymap);

   }
});
}
var nextStopHours = [];
var nextStopMinutes = [];
function route66(){
  fetch('http://data.cabq.gov/transit/realtime/route/route66.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    function setLatLng(){
      var now = new Date();
      var hour = now.getHours();
      var minutes = now.getMinutes();
      var milliseconds = now.getMilliseconds();
      var time = Number(hour+':'+minutes+':'+milliseconds);
      var nextStopHour = Number(data.vehicles[0].next_stop_sched_time[0][0]+data.vehicles[0].next_stop_sched_time[0][1]);
      var newHour = nextStopHour-hour;
      for(i=0;i<data.vehicles.length;i++){
      nextStopMinutes[i] = Number(data.vehicles[i].next_stop_sched_time[0][3]+data.vehicles[i].next_stop_sched_time[0][4]);
      nextStopHour[i] = Number(data.vehicles[i].next_stop_sched_time[0][0]+data.vehicles[i].next_stop_sched_time[0][2]);
       route66Busses[i].setLatLng([data.vehicles[i].latitude, data.vehicles[i].longitude]);
       route66Busses[i].bindPopup('<b>Bus: </b> #'+data.vehicles[i].vehicle_id+'. <br><b>Next stop: </b>'+data.vehicles[i].next_stop_name[0]+'<br><b>Time Until Next Stop:</b> '+(nextStopHour-hour)+' Hours and '+(nextStopMinutes[i]-minutes)+' Minutes');
       console.log(nextStopHour-hour);
      }
    }
    setLatLng();
});
}
// NOTE: start of route11 markers and tracking

function addRoute11(){
  fetch('http://data.cabq.gov/transit/realtime/route/route11.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    function setLatLng(){
    for(i=0;i<data.vehicles.length;i++){
     route11Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: redIcon});
     route11Busses[i].bindPopup('This is bus #'+data.vehicles[i].vehicle_id);

    }
  }
  setLatLng();
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

function addRoute8(){
  fetch('http://data.cabq.gov/transit/realtime/route/route8.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route8Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: blueIcon});
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
function addRoute1(){
  fetch('http://data.cabq.gov/transit/realtime/route/route1.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route1Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: purpleIcon});
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

function addRoute31(){
  fetch('http://data.cabq.gov/transit/realtime/route/route31.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for(i=0;i<data.vehicles.length;i++){
     route31Busses[i] = L.marker([data.vehicles[i].latitude, data.vehicles[i].longitude], {icon: greenIcon});
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



function drawRoute66(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    //
      // route66Line.length = Math.min(route66Busses.length, 346);
      var route66Cords = [];
      var route66marker = [];
    var cords = shapes.features[104].geometry.coordinates;
      for(i=0;i<cords.length;i++){
       route66marker[i] = L.marker([cords[i][1],cords[i][0]]);
       route66Cords.push(route66marker[i].getLatLng());
       route66Line[i] = L.polyline(route66Cords,{color: 'orange', smoothFactor: 1, opacity: 0.2});
       // route66Line.length = route66Line[i].length;
       // route66marker.length = Math.min(route66marker, route66marker[i])
       // route66Cords.length = Math.min(route66Cords, route66Cords[i])

      }
  });
}

function drawRoute11(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var cords1 = shapes.features[7].geometry.coordinates;
    var route11Cords = [];
    var route11Marker = [];
      for(i=0;i<cords1.length;i++){
       route11Marker[i] = L.marker([cords1[i][1],cords1[i][0]]);
       route11Cords.push(route11Marker[i].getLatLng());
       route11Line[i] = L.polyline(route11Cords,{color: 'red', smoothFactor: 1, opacity: 0.2});
      }
  });
}


function drawRoute8(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);

    var cords = shapes.features[118].geometry.coordinates;
    var route8Cords = [];
    var route8Marker = [];
      for(i=0;i<cords.length;i++){
       route8Marker[i] = L.marker([cords[i][1],cords[i][0]]);
       route8Cords.push(route8Marker[i].getLatLng());
       route8Line[i] = L.polyline(route8Cords,{color: 'blue', smoothFactor: 1, opacity: 0.2});
      }
  });
}

function drawRoute1(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var cords = shapes.features[0].geometry.coordinates;
    var route1Cords = [];
    var route1Marker = [];
      for(i=0;i<cords.length;i++){
      route1Marker[i]  = L.marker([cords[i][1],cords[i][0]]);
       route1Cords.push(route1Marker[i].getLatLng());
       route1Line[i] = L.polyline(route1Cords,{color: 'purple', smoothFactor: 0.5, opacity: 0.2});
      }
  });
}

function drawRoute31(){
  fetch('data/map.geojson')
  .then(response => response.json())
  .then(function (shapes){
    // route1.length = Math.min(route1.length, 249);
    // console.log(shapes.features[0].geometry.coordinates[1]);
    var route31Cords = [];
    var route31Marker = [];
    var cords = shapes.features[72].geometry.coordinates;
      for(i=0;i<cords.length;i++){
       route31Marker[i] = L.marker([cords[i][1],cords[i][0]]);
       route31Cords.push(route31Marker[i].getLatLng());
       route31Line[i] = L.polyline(route31Cords,{color: 'green', smoothFactor: 1, opacity: 0.2});
      }
  });
}
addRoute66();
drawRoute66();
addRoute11();
drawRoute11();
addRoute8();
drawRoute8();
addRoute1();
drawRoute1();
addRoute31();
drawRoute31();

button1.addEventListener('click', function(){
  if(mymap.hasLayer(route66Busses[0])){

    for(i=0;i<route66Busses.length;i++){
      mymap.removeLayer(route66Busses[i]);
    }
    for(i=0; i<route66Line.length;i++){
    mymap.removeLayer(route66Line[i]);
    }
  }else{
    // addRoute66();
    for(i=0;i<route66Busses.length;i++){
     mymap.addLayer(route66Busses[i]);
   }
    window.setInterval(function(){
      route66();
    }, 1000);
    for(i=0; i<route66Line.length;i++){
      mymap.addLayer(route66Line[i]);
    }

  }
});
button2.addEventListener('click', function(){
  if(mymap.hasLayer(route11Busses[0])){
    for(i=0;i<route11Busses.length;i++){
      mymap.removeLayer(route11Busses[i]);
    }
    for(i=0; i<route11Line.length;i++){
    mymap.removeLayer(route11Line[i]);
    }
  }else{
    for(i=0;i<route11Busses.length;i++){
     mymap.addLayer(route11Busses[i]);
   }
    window.setInterval(function(){
      route11();
    }, 1000);
    for(i=0; i<route11Line.length;i++){
      mymap.addLayer(route11Line[i]);
    }
  }
});
button3.addEventListener('click', function(){
  if(mymap.hasLayer(route8Busses[0])){
    for(i=0;i<route8Busses.length;i++){
      mymap.removeLayer(route8Busses[i]);
    }
    for(i=0; i<route8Line.length;i++){
    mymap.removeLayer(route8Line[i]);
    }
  }else{
    for(i=0;i<route8Busses.length;i++){
     mymap.addLayer(route8Busses[i]);
   }
    window.setInterval(function(){
      route8();
    }, 1000);
    for(i=0; i<route8Line.length;i++){
      mymap.addLayer(route8Line[i]);
    }
  }
});
button4.addEventListener('click', function(){
  if(mymap.hasLayer(route1Busses[0])){
    for(i=0;i<route1Busses.length;i++){
      mymap.removeLayer(route1Busses[i]);
    }
    for(i=0; i<route1Line.length;i++){
    mymap.removeLayer(route1Line[i]);
    }
  }else{
    for(i=0;i<route1Busses.length;i++){
     mymap.addLayer(route1Busses[i]);
   }
    window.setInterval(function(){
      route1();
    }, 1000);
    for(i=0; i<route1Line.length;i++){
      mymap.addLayer(route1Line[i]);
    }
  }
});
button5.addEventListener('click', function(){
  if(mymap.hasLayer(route31Busses[0])){
    for(i=0;i<route31Busses.length;i++){
      mymap.removeLayer(route31Busses[i]);
    }
    for(i=0; i<route31Line.length;i++){
    mymap.removeLayer(route31Line[i]);
    }
  }else{
    for(i=0;i<route31Busses.length;i++){
     mymap.addLayer(route31Busses[i]);
   }
    window.setInterval(function(){
      route31();
    }, 1000);
    for(i=0; i<route31Line.length;i++){
      mymap.addLayer(route31Line[i]);
    }
  }
});
button8.addEventListener('click', function(){

  window.setInterval(function(){
    route66();
  }, 1000);
  window.setInterval(function(){
    route11();
  }, 1000);
  window.setInterval(function(){
    route8();
  }, 1000);
  window.setInterval(function(){
    route1();
  }, 1000);
  window.setInterval(function(){
    route31();
  }, 1000);
});
button9.addEventListener('click', function(){
  location.reload();
});
