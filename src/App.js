import React from 'react'
import Leaflet from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './leaflet/dist/leaflet.css';
import Sidebar from "react-sidebar";


Leaflet.Icon.Default.imagePath =
'../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
	  <div>
		  <Sidebar
			sidebar={<b> bar </b>}
			open={this.state.sidebarOpen}
			onSetOpen={this.onSetSidebarOpen}
			styles={{ sidebar: { background: "white" } }}
		  >
			<button onClick={() => this.onSetSidebarOpen(true)}>
			  Open sidebar
			</button>
		  </Sidebar>
	  </div>
    );
  }
}

class Map extends React.Component {constructor(props) {
  super(props);
	this.state = {
	  sidebarOpen: false
	};
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  
  render() {
	
    return (
	    <div>
		  <LeafletMap
			center={[-22.1225167, -51.3882528]}
			zoom={16}
			maxZoom={20}
			attributionControl={true}
			zoomControl={true}
			doubleClickZoom={true}
			scrollWheelZoom={true}
			dragging={true}
			animate={true}
			easeLinearity={0.35}
			style={{flexItems: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
		  >		
			<TileLayer
			  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
			  attribution= '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
			/>
			<Marker position={[-22.1225167, -51.3862528]} >
			  <Popup>
				<button onClick={() => this.onSetSidebarOpen(true)}>
				  Open sidebar
				</button>
			  </Popup>
			</Marker>
			<Marker position={[-22.1226167, -51.3878528]}>
			  <Popup>
				Sensor.
			  </Popup>
			</Marker>
			<Marker position={[-22.1215167, -51.3842528]}>
			  <Popup>
				Sensor.
			  </Popup>
			</Marker>
			<Marker position={[-22.1236167, -51.3742528]}>
			  <Popup>
				Sensor.
			  </Popup>
			</Marker>
			<Marker position={[-22.1285167, -51.3882528]}>
			  <Popup>
				Sensor.
			  </Popup>
			</Marker>
		  </LeafletMap>
		  <Sidebar
		    sidebar={<b> bar </b>}
		    open={this.state.sidebarOpen}
		    onSetOpen={this.onSetSidebarOpen}
		    styles={{ sidebar: { background: "white" } }}
		  />
		</div>
    );
  }
}

export default Map;