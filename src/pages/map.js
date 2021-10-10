import React, { Component } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import corona from "../assets/images/emo.svg";
import map from "../assets/images/map.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { numberWithCommas } from "../assets/js/commas";
import "../assets/css/map.css";
import Icon from "../components/icon";
import ReactDOMServer from "react-dom/server";
import L from "leaflet";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

function Licon(params) {
  const icon = L.divIcon({
    className: "custom-icon",
    html: ReactDOMServer.renderToString(<Icon image={params} />),
  });
  return icon;
}
export default class Map extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Helmet>
          <title>peta sebaran covid-19 dunia</title>
          <link rel="shortcut icon" href={corona} type="image/x-icon" />
        </Helmet>
        <Navbar active="map" />
        <Jumbotron
          desc="menampilkan data sebaran covid-19 diberbagai negara meliputi indonesia, malaysia , jerman , inggris dan lain lain . data meliputi bendera , nama negara , kasus positif , sembuh dan meninggal"
          title="peta sebaran covid-19 dunia"
          leftchild={<img src={map} alt="" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" />}
        />
        <div className="main-map">
          <MapContainer center={[-5, 120]} zoom={3} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <Marker position={[-6, 120]}>
              <Popup>indonesia</Popup>
            </Marker> */}
            {this.state.data.map((data) => (
              <Marker position={[data.countryInfo.lat, data.countryInfo.long]} icon={Licon(data.countryInfo.flag)}>
                <Popup>
                  <h3>{data.country}</h3>
                  <li>positif : {numberWithCommas(data.cases)}</li>
                  <li>meninggal : {numberWithCommas(data.deaths)}</li>
                  <li>sembuh : {numberWithCommas(data.recovered)}</li>
                  <a href={`/negara/${data.countryInfo.iso2}`} target="_blank" rel="noreferrer">
                    detail
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <Footer />
      </>
    );
  }
}
