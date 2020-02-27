mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXNtaWxlc21pbGVzIiwiYSI6ImNrNms1NGplYzAwb3gzamtnajRkZXU3NnQifQ.nWRgr-9qGhfLQrZTI4CdFA';

var initOptions = {
  container: 'mapdiv',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-73.96, 40.72],
  zoom: 12
}

var mapObject = new mapboxgl.Map(initOptions)

pizzaDirectory.forEach(
  function(pizzaSpot) {
    new mapboxgl.Marker()
      .setLngLat([pizzaSpot.longitude,pizzaSpot.latitude])
      .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(`<p>${pizzaSpot.name} likes ${pizzaSpot.pizza_place}</p>`)
      )
      .addTo(mapObject)
})




// loadGeoJSON

// var geojson = {
//   type: 'FeatureCollection',
//   features: [{
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [-77.032, 38.913]
//     },
//     properties: {
//       title: 'Mapbox',
//       description: 'Washington, D.C.'
//     }
//   },
//   {
//     type: 'Feature',
//     geometry: {
//       type: 'Point',
//       coordinates: [-122.414, 37.776]
//     },
//     properties: {
//       title: 'Mapbox',
//       description: 'San Francisco, California'
//     }
//   }]
// };

// add markers to map
// geojson.features.forEach(function(marker) {
//
//   // create a HTML element for each feature
//   var el = document.createElement('div');
//   el.className = 'marker';
//
//   // make a marker for each feature and add to the map
//   new mapboxgl.Marker(el)
//     .setLngLat(marker.geometry.coordinates)
//   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//     .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
//   .addTo(map);
//
// });
