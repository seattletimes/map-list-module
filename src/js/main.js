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

console.log(L);

const map = L.map('map')
map.setView([47.6108, -122.3307], 11);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd'
}).addTo(map);

L.marker([47.661269, -122.342919], {
  title: "Meowtropolitan Cafe",
}).bindPopup('<h2>Meowtropolitan Cafe</h2>').addTo(map)
//end sidechain