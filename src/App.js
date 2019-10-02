import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends React.Component {
  render() {
	
    return (
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
		style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
          attribution= '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
        />
        <Marker position={[-22.1225167, -51.3862528]}>
          <Popup>
            Sensor.
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
    );
  }
}

export default Map;