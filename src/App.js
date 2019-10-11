import React from 'react'
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
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

class Mapa extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const map = (
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    )
    return <map/>;
  }
}

export default Mapa;