import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [-22.1225167, -51.3882528],
      zoom: 16,
      layers: [
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
          attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attribution">CARTO</a>',
          maxNativeZoom:19,
		  maxZoom: 20
        }),
      ]
    });
  }

  render() {
    return <div style={{height: 600}}id="map"></div>
  }
}

export default Map;