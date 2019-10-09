import React from 'react'
import Leaflet from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './leaflet/dist/leaflet.css';
import Sidebar from 'leaflet-sidebar'
import L from 'leaflet';

///https://dev.to/itsmestevieg/customising-leafletjs-f55
///https://leafletjs.com/plugins.html
///https://jsfiddle.net/wcLvsg37/1/
///https://stackoverflow.com/questions/42282998/leaflet-sidebar-display-data-in-the-sidebar-when-a-marker-is-clicked
///https://embed.plnkr.co/plunk/wH7u64
///https://stackoverflow.com/questions/50437852/leaflet-sidebar-within-a-while-loop
///https://stackoverflow.com/questions/36860914/toggle-leaflet-sidebar-v2?rq=1
///https://www.npmjs.com/package/leaflet-sidebar
///https://stackoverflow.com/questions/54047240/leaflet-js-with-tabletop-js-sidebar-menu-for-map
///https://codepen.io/danhahn/pen/QKwEXN

Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Map extends React.Component {
  componentDidMount() {
	  
    var map = L.map('map', {
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

	var sidebar = L.control.sidebar('sidebar', {
		closeButton: true,
		position: 'left'
	});
	map.addControl(sidebar);

	setTimeout(function () {
		sidebar.show();
	}, 500);
	
	var marker = L.marker([49.46, 17.11]).addTo(map).on('click', function () {
		sidebar.toogle()
		marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

	});

  }

  render() {
    return <div style={{height: 600}}id="map"></div>
  }
}

export default Map;