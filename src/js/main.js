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
    const locations = data; 
    addMarkers(locations);
    addSidebarItem(locations);
  });


const map = L.map('map')
map.setView([47.6108, -122.3307], 11);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',     crossOrigin: 'anonymous' }).addTo(map)


let markersArray = []

function addMarkers(locations){
  for (let i = 0; i < locations.length; i++) {
    let marker = L.circleMarker([locations[i].lat, locations[i].long], {
    radius: 8,  // Size of the circle
    fillColor: "green",
    color: "darkgreen",  // Border color
    weight: 2,  // Border width
    opacity: 1,
    fillOpacity: 0.8,
    title: locations[i].name,
    }).bindPopup(`<h2>${locations[i].name}</h2><n><p>${locations[i].address}</p>`).addTo(map);

    markersArray.push(marker);
    console.log("markersArray", markersArray)
  }

}

// Populate sidebar

function addSidebarItem(locations){
  sidebar = document.getElementById("sidebar-ul")

  for (let i = 0; i < locations.length; i++) {
    var listItem = document.createElement("li");
    listItem.dataset.index = i;
    listItem.classList.add("sidebar-li")
    sidebar.appendChild(listItem)

    // Location title
    var listItemTitle = document.createElement("h2")
    listItem.appendChild(listItemTitle)

    listItemTitle.innerText = locations[i].name

    // Location details
    var listItemDetails = document.createElement("p")
    listItem.appendChild(listItemDetails)

    listItemDetails.innerText = locations[i].address

  }
}

function onListItemClick(e) {
  console.log("listitemclick running")
  const listItem = e.target.closest('LI')

if (listItem){
  
  document.querySelectorAll('.sidebar-li').forEach(item => {
    item.classList.remove('active');
  });

  listItem.classList.add('active');
  console.log("active item:", listItem.innerText);
  
} 
}

window.addEventListener("click", onListItemClick)
// L.marker([47.661269, -122.342919], {
//   title: "Meowtropolitan Cafe",
// }).bindPopup('<h2>Meowtropolitan Cafe</h2>').addTo(map)
// //end sidechain