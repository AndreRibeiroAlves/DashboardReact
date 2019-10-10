import React from 'react'
import Leaflet from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Sidebar from 'leaflet-sidebar'
import L from 'leaflet';

import './leaflet/dist/leaflet.css';
import './leaflet-sidebar/L.Control.Sidebar.css';

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
	constructor(props){
		super(props);
		this.state={ID:-1};
	}
	
  handleChange = (newValue) => {
    this.props.setState({ ID: newValue });
  }
  
  componentDidMount() {
	  
     var map = L.map('map');
        map.setView([-22.1225167, -51.3862528], 16);

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: 'Map data &copy; OpenStreetMap contributors'
        }).addTo(map);

        var sidebar = L.control.sidebar('sidebar', {
            closeButton: true,
            position: 'right'
        });
        map.addControl(sidebar);

        map.on('click', function () {
            sidebar.hide();
        })
		
		var ID = 0;
		var funcao = function () {
            sidebar.toggle();
			/*this.setState({ID: 0});*/
        }
		this.setState({ID});
		
        L.marker([-22.1225167, -51.3862528]).addTo(map).on('click', funcao);
		L.marker([-22.1226167, -51.3878528]).addTo(map).on('click', funcao);
		L.marker([-22.1215167, -51.3842528]).addTo(map).on('click', funcao);
		L.marker([-22.1236167, -51.3742528]).addTo(map).on('click', funcao);
		L.marker([-22.1285167, -51.3882528]).addTo(map).on('click', funcao);
		
  }

  render() {
    return  <div>
				<div id="sidebar">
					<h1>Sensor: {this.state.ID}</h1>

					<p>Gráfico 1</p>
					<p>Gráfico 2</p>
					<p>Gráfico 3</p>
					<p>Gráfico 4</p>
					<p>Gráfico 5</p>
				</div>

				<div id="map" style={{height: 600}}></div>
			</div>
  }
}

export default Map;