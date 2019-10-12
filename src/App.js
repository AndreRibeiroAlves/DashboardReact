import React, { Component } from "react";
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Sidebar, Tab } from "react-leaflet-sidetabs";
import { FiHome, FiChevronRight, FiSearch, FiSettings, FiBarChart, FiInfo } from "react-icons/fi";
import "./styles.css";
import './leaflet/dist/leaflet.css';

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

export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.center = [-22.1225167, -51.3862528];

    this.state = {
      collapsed: true,
      selected: "informacoes",
      sensor: -1,
      sensores: sensores
    };
  }

  onClose() {
    this.setState({ collapsed: true });
  }
  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id
    });
  }

  render() {
    return (
      <>
        <Sidebar
          id="sidebar"
          position="right"
          collapsed={this.state.collapsed}
          closeIcon={<FiChevronRight />}
          selected={this.state.selected}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
        >
          <Tab id="informacoes" header="Informações" icon={<FiInfo />}>
            <h3>Sensor {this.state.sensor}</h3>
            <p>Informações</p>
          </Tab>
          <Tab id="graficos" header="Graficos" icon={<FiBarChart />}>
            <p>Gráficos</p>
          </Tab>
          <Tab id="busca" header="Busca" icon={<FiSearch />}>
            <p>Sensores na região</p>
          </Tab>
          <Tab
            id="configuracoes"
            header="configurações"
            anchor="bottom"
            icon={<FiSettings />}
          >
            <p>Configurações Gerais</p>
          </Tab>
        </Sidebar>

        <Map className="mapStyle" zoom={15} center={this.center}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
          />
          {this.state.sensores.map((todo, id) => 
            <Marker position={[todo.lat, todo.long]}>
              <Popup>
                  <a onClick={() => { this.setState({ collapsed: !this.state.collapsed, sensor: todo.id });}}>
                      Mostrar Gráficos
                  </a>
              </Popup>
          </Marker>)};
        </Map>
      </>
    );
  }
}

const sensores = [
  {
    id: 1,
    lat: -22.1225167,
    long: -51.3862528
  },
  {
    id: 2,
    lat: -22.1226167,
    long: -51.3878528
  },
  {
    id: 3,
    lat: -22.1215167,
    long: -51.3842528
  },
  {
    id: 4,
    lat: -22.1236167,
    long: -51.3742528
  },
  {
    id: 5,
    lat: -22.1285167,
    long: -51.3882528
  },
]