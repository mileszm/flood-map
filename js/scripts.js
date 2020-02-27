mapboxgl.accessToken = 'pk.eyJ1IjoibWlsZXNtaWxlc21pbGVzIiwiYSI6ImNrNms1NGplYzAwb3gzamtnajRkZXU3NnQifQ.nWRgr-9qGhfLQrZTI4CdFA';

var initOptions = {
  container: 'map-div',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-74, 40.725],
  zoom: 12
}

var mapObject = new mapboxgl.Map(initOptions)

mapObject.addControl(new mapboxgl.NavigationControl())

mapObject.on('load', function() {
  mapObject.addSource('flood1', {
    type: 'geojson',
    data: './data/lvl1.geojson',
  })
  mapObject.addSource('flood2', {
    type: 'geojson',
    data: './data/lvl2.geojson',
  })

  mapObject.addLayer({
      id: 'flood1-shading',
      type: 'fill',
      source: 'flood1',
      paint: {
        'fill-color': '#3333ff',
        'fill-opacity': 0.5,
      },
  })
  mapObject.addLayer({
      id: 'flood2-shading',
      type: 'fill',
      source: 'flood2',
      paint: {
        'fill-color': '#0066ff',
        'fill-opacity': 0.5,
      },
  })
})
