// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

import L from 'leaflet';
//added sidechain 
import Sidechain from '@nprapps/sidechain';
const guest = Sidechain.registerGuest({ sentinel: 'st' });

guest.sendMessage({
  type: 'analytics',
  eventCategory: 'interaction',
  eventAction: 'click',
  eventLabel: 'etc'
})

fetch('../../data/map-module.sheet.json')
  .then(response => response.json())
  .then(data => {
    const locations = data; // or just use 'data' directly
    
    console.log(locations); // Check what you got
    
    // Now you can loop through and use it
    // addMarkers(locations);
  });

const map = L.map('map')
map.setView([47.6108, -122.3307], 11);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',     crossOrigin: 'anonymous' }).addTo(map)


function addMarkers(){

}

L.marker([47.661269, -122.342919], {
  title: "Meowtropolitan Cafe",
}).bindPopup('<h2>Meowtropolitan Cafe</h2>').addTo(map)
//end sidechain