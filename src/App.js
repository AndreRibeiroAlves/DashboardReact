import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GoogleMaps from "simple-react-google-maps"

/*const AnyReactComponent = ({ text }) => <div>{text}</div>;*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dashboard React Web Teste
        </p>
		<SimpleMap/>
      </header>
    </div>
  );
}

class SimpleMap extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMaps
		  apiKey={"AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg"}
		  style={{height: "400px", width: "100%"}}
		  zoom={6}
		  center={{lat: -27.2106710, lng: -49.6362700}}
		  markers={{lat: -27.2106710, lng: -49.6362700}} //optional
		/>
      </div>
    );
  }
}

export default App;
