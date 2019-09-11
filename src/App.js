import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

/*const AnyReactComponent = ({ text }) => <div>{text}</div>;*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dashboard React Web Teste
        </p>
      </header>
	  <body>
		<MapWithAMarker
		  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBT48L_cAyd3UkgDzILVfwwpbX_88f9too&v=3.exp&libraries=geometry,drawing,places" 
		  loadingElement={<div style={{ height: `100%` }} />}
		  containerElement={<div style={{ height: `400px` }} />}
		  mapElement={<div style={{ height: `100%` }} />}
		/>
	  </body>
    </div>
  );
}

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
));

export default App;
