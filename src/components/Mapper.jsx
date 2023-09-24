import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
var LeafIcon = L.Icon.extend({
  options: {
     iconSize:     [38, 95],
     shadowSize:   [50, 64],
     iconAnchor:   [22, 94],
     shadowAnchor: [4, 62],
     popupAnchor:  [-3, -76]
  }
});
export default function Mapper(props) {
  const mapRef = useRef(null); // Create a ref for the map instance

  useEffect(() => {
    if (mapRef.current) {
      // Check if a map instance already exists
      mapRef.current.remove(); // Remove the existing map
    }
   
    // Create a map
    const map = L.map('map').setView([18.52043, 73.856743], 10);

    // Add a tile layer (you can choose different tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    var greenIcon = new LeafIcon({
      iconUrl: 'https://unpkg.com/leaflet@1.0.3/dist/images/marker-icon.png',
      shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
  })
  
    // Create an array of waypoints
    const waypoints = props.markers.map((waypoint) => {
      return L.marker([waypoint.lat, waypoint.lng], { title: waypoint.title },
        {icon:greenIcon}
        ).addTo(map);
    });

    // Create an array of LatLng objects for the route (other than start and end)
    const routeCoordinates = waypoints.map((waypoint) => waypoint.getLatLng());

    // Create a polyline to represent the route
    const route = L.polyline(routeCoordinates, {
      color: 'red', // Customize the route line color
    }).addTo(map);

    // Fit the map to the bounds of the route
    map.fitBounds(route.getBounds());

    // Store the map instance in the ref for cleanup
    mapRef.current = map;
  }, [props.markers]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
}
