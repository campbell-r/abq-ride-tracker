// NOTE:
var mymap = L.map('mapid').setView([35.084877299999995,
          -106.6468263], 13);
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
 var marker = L.marker([0,0], {icon: orangeIcon}).addTo(mymap);
 var marker1 = L.marker([0,0], {icon: redIcon}).addTo(mymap);
 var marker2 = L.marker([0,0],{icon: blueIcon}).addTo(mymap);
 var marker3 = L.marker([0,0], {icon: purpleIcon}).addTo(mymap);
 var marker4 = L.marker([0,0], {icon: greenIcon}).addTo(mymap);
 var marker5 = L.marker([0,0], {icon: yellowIcon}).addTo(mymap);
 var marker6 = L.marker([0,0], {icon: pinkIcon}).addTo(mymap);
 var marker7 = L.marker([0,0], {icon: greyIcon}).addTo(mymap);
 var marker8 = L.marker([0,0], {icon: blackIcon}).addTo(mymap);


var latitude4;

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

// NOTE: get JSON and interval seco
window.setInterval(function(){
  // NOTE: initializing callback function
  function getData(callback) {
    // NOTE: getting the abq bus json data
    $.getJSON('http://data.cabq.gov/transit/realtime/route/allroutes.json',
    // NOTE: setting the data argument, so we can work with the json data
     function (data) {
      callback(data);
    });
  }
  // NOTE: initializing get data function so we can assign variables to the data
  getData(function (data) {
    // NOTE: here we are grabbing the individual lat and lng data and assigning to variables
    latitude = data.allroutes[0].latitude;
    longitude = data.allroutes[0].longitude;
    vehicleId = data.allroutes[0].vehicle_id;
    nextStop = data.allroutes[0].next_stop_name;
    // NOTE: start of vehicle1
    latitude1 = data.allroutes[1].latitude;
    longitude1 = data.allroutes[1].longitude;
    vehicleId1 = data.allroutes[1].vehicle_id;
    nextStop1 = data.allroutes[1].next_stop_name;
    // NOTE: start of vehicle2
    latitude2 = data.allroutes[2].latitude;
    longitude2 = data.allroutes[2].longitude;
    vehicleId2 = data.allroutes[2].vehicle_id;
    nextStop2 = data.allroutes[2].next_stop_name;

    // NOTE: start of vehicle3
    latitude3 = data.allroutes[3].latitude;
    longitude3 = data.allroutes[3].longitude;
    vehicleId3 = data.allroutes[3].vehicle_id;
    nextStop3 = data.allroutes[3].next_stop_name;
    // NOTE: start of vehicle4
    latitude4 = data.allroutes[4].latitude;
    longitude4 = data.allroutes[4].longitude;
    vehicleId4 = data.allroutes[4].vehicle_id;
    nextStop4 = data.allroutes[4].next_stop_name;
    // NOTE: start of vehicle5
    latitude5 = data.allroutes[5].latitude;
    longitude5 = data.allroutes[5].longitude;
    vehicleId5 = data.allroutes[5].vehicle_id;
    nextStop5 = data.allroutes[5].next_stop_name;
    // NOTE: start of vehicle6
    latitude6 = data.allroutes[6].latitude;
    longitude6 = data.allroutes[6].longitude;
    vehicleId6 = data.allroutes[6].vehicle_id;
    nextStop6 = data.allroutes[6].next_stop_name;
    // NOTE: start of vehicle7
    latitude7 = data.allroutes[7].latitude;
    longitude7 = data.allroutes[7].longitude;
    vehicleId7 = data.allroutes[7].vehicle_id;
    nextStop7 = data.allroutes[7].next_stop_name;
    // NOTE: start of vehicle8
    latitude8 = data.allroutes[8].latitude;
    longitude8 = data.allroutes[8].longitude;
    vehicleId8 = data.allroutes[8].vehicle_id;
    nextStop8 = data.allroutes[8].next_stop_name;
    // NOTE: setting up the arguments for the autoPopulate function
    autoPopulate('field', 'id');
  });

  function autoPopulate(field, id) {
    console.log('Bus '+vehicleId+' is located at '+ latitude+' '+ longitude);
    console.log('Bus '+vehicleId1+' is located at '+latitude1+' '+longitude2);
    console.log('Bus '+vehicleId2+' is located at ' + latitude2+' '+longitude2);
    console.log('Bus '+vehicleId3+' is located at ' + latitude3+' '+longitude3);
    console.log('Bus '+vehicleId4+' is located at ' + latitude4+' '+longitude4);
    console.log('Bus '+vehicleId5+' is located at ' + latitude5+' '+longitude5);
    console.log('Bus '+vehicleId6+' is located at ' + latitude6+' '+longitude6);
    console.log('Bus '+vehicleId7+' is located at ' + latitude7+' '+longitude7);
    console.log('Bus '+vehicleId8+' is located at ' + latitude8+' '+longitude8);

    
     marker.setLatLng([latitude,longitude]);
     marker.bindPopup('This is bus '+vehicleId+'. Next stop is '+nextStop+'.');
     document.getElementById('button1').innerHTML = 'Bus '+vehicleId;
     marker1.setLatLng([latitude1,longitude1]);
     marker1.bindPopup('This is bus '+vehicleId1+'. Next stop is '+nextStop1+'.');
     document.getElementById('button2').innerHTML = 'Bus '+vehicleId1;
     marker2.setLatLng([latitude2,longitude2]);
     marker2.bindPopup('This is bus '+vehicleId2+'. Next stop is '+nextStop2+'.');
     document.getElementById('button3').innerHTML = 'Bus '+vehicleId2;
     marker3.setLatLng([latitude3,longitude3]);
     marker3.bindPopup('This is bus '+vehicleId3+'. Next stop is'+ nextStop3+'.');
     document.getElementById('button4').innerHTML = 'Bus '+vehicleId3;
     marker4.setLatLng([latitude4,longitude4]);
     marker4.bindPopup('This is bus '+vehicleId4+'. Next stop is '+nextStop4+'.');
     document.getElementById('button5').innerHTML = 'Bus '+vehicleId4;
     marker5.setLatLng([latitude5,longitude5]);
     marker5.bindPopup('This is bus '+vehicleId5+'. Next stop is '+nextStop5+'.');
     document.getElementById('button6').innerHTML = 'Bus '+vehicleId5;
     marker6.setLatLng([latitude6,longitude6]);
     marker6.bindPopup('This is bus '+vehicleId6+'. Next stop is '+nextStop6+'.');
     document.getElementById('button7').innerHTML = 'Bus '+vehicleId6;
     marker7.setLatLng([latitude7,longitude7]);
     marker7.bindPopup('This is bus '+vehicleId7+'. Next stop is '+nextStop7+'.');
     document.getElementById('button8').innerHTML = 'Bus '+vehicleId7;
     marker8.setLatLng([latitude8,longitude8]);
     marker8.bindPopup('This is bus '+vehicleId8+'. Next stop is '+nextStop8+'.');
     document.getElementById('button9').innerHTML = 'Bus '+vehicleId8;

  }
}, 3000);

// NOTE: event listeners for button clicks to popup bus location
button1.addEventListener('click', function(){
  marker.openPopup();
});
button2.addEventListener('click', function(){
  marker1.openPopup();
});
button3.addEventListener('click', function(){
  marker2.openPopup();
})
button4.addEventListener('click', function(){
  marker3.openPopup();
});
button5.addEventListener('click', function(){
  marker4.openPopup();
});
button6.addEventListener('click', function(){
  marker5.openPopup();
});
button7.addEventListener('click', function(){
  marker6.openPopup();
});
button8.addEventListener('click', function(){
  marker7.openPopup();
});
button9.addEventListener('click', function(){
  marker8.openPopup();
});






// function timedRefresh(timeoutPeriod){
//   setTimeout('location.reload(true);',timeoutPeriod);
//   function getData(callback) {
//     $.getJSON('http://data.cabq.gov/transit/realtime/route/route66.json', function (data) {
//       callback(data);
//     });
//   }
//
//   getData(function (data) {
//     myData = data.vehicles[1].latitude;
//     latitude = data.vehicles[0].latitude;
//     longitude = data.vehicles[0].longitude;
//     latitude1 = data.vehicles[1].latitude;
//     longitude1 = data.vehicles[1].longitude;
//     latitude2 = data.vehicles[2].latitude;
//     longitude2 = data.vehicles[2].longitude;
//     latitude3 = data.vehicles[3].latitude;
//     longitude3 = data.vehicles[3].longitude;
//     autoPopulate('field', 'id');
//   });
//
//   function autoPopulate(field, id) {
//     console.log(latitude+' '+longitude);
//      marker = L.marker([latitude,longitude]).addTo(mymap);
//      marker1 = L.marker([latitude1,longitude1]).addTo(mymap);
//      marker2 = L.marker([latitude2,longitude3]).addTo(mymap);
//   }
// }
// window.onload = timedRefresh(3000);



// window.setInterval(function(){
// $.getJSON( "http://data.cabq.gov/transit/realtime/route/route66.json", function( data ) {
//   var vehicle1 = [data.vehicles[0].vehicle_id];
// var latitude = [data.vehicles[0].latitude];
// var longitude = [data.vehicles[0].longitude];
//   console.log(latitude+' '+longitude);
//
// } );
// }, 3000);
