import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
  static defaultProps = {
    center: {
      lat: -27.2106710,
      lng: -49.6362700
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBT48L_cAyd3UkgDzILVfwwpbX_88f9too' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
		{/*<AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
		/>*/}
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
