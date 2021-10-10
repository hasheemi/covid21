import React, { Component } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Panel from "../components/panel";
import "../assets/css/navbar.css";
import "../assets/css/jumbotron.css";
import "../assets/css/panel.css";
import "../assets/css/gejala.css";
import globe from "../assets/images/GlobeIcon.svg";
// import { numberWithCommas } from "./assets/js/commas.js";
import Diagram from "../components/diagram";
import "../assets/css/diagram.css";
import Gejala from "../components/gejala";
import Cegah from "../components/cegah";
import "../assets/css/cegah.css";
import Footer from "../components/footer";
import "../assets/css/footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import corona from "../assets/images/emo.svg";
import { Helmet } from "react-helmet";

AOS.init({
  once: true,
});
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function getPersen(now, yesterday) {
  return Math.round(((now - yesterday) / yesterday) * 100);
}
class Home extends Component {
  state = {
    flag: "global",
    from: "global",
    positif: 0,
    sembuh: 0,
    meninggal: 0,
    sekarang: {
      positif: 0,
      negatif: 0,
      meninggal: 0,
    },
    kemarin: {
      positif: 0,
      negatif: 0,
      meninggal: 0,
    },
    positifH: [],
    sembuhH: [],
    meninggalH: [],
  };
  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          flag: globe,
          from: "global",
          positif: numberWithCommas(response.cases),
          sembuh: numberWithCommas(response.recovered),
          meninggal: numberWithCommas(response.deaths),
          sekarang: {
            positif: response.todayCases,
            negatif: response.todayRecovered,
            meninggal: response.todayDeaths,
          },
        });
        fetch("https://disease.sh/v3/covid-19/all?yesterday=1")
          .then((respone) => respone.json())
          .then((response) => {
            this.setState({
              kemarin: {
                positif: response.todayCases,
                negatif: response.todayRecovered,
                meninggal: response.todayDeaths,
              },
            });
          });
      });
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=14")
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          positifH: res.cases,
          meninggalH: res.deaths,
          sembuhH: res.recovered,
        });
      });
  }
  render() {
    return (
      <div>
        <Helmet>
          <link rel="shortcut icon" href={corona} type="image/x-icon" />
        </Helmet>
        <Navbar active="home" />
        <Jumbotron
          desc="Virus Corona (COVID-19) pertama kali ditemukan di Wuhan, Hubei, China pada Desember 2019, wabah tersebut kemudian diakui sebagai pandemi oleh Organisasi Kesehatan Dunia (WHO) pada 11 Maret 2020.
"
          title="jangan lengah covid-19 masih ada"
          leftchild={<img src={corona} alt="" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" />}
        />
        <Panel
          flag={this.state.flag}
          from={this.state.from}
          positif={this.state.positif}
          sembuh={this.state.sembuh}
          meninggal={this.state.meninggal}
          pPositif={getPersen(this.state.sekarang.positif, this.state.kemarin.positif)}
          pNegatif={getPersen(this.state.sekarang.negatif, this.state.kemarin.negatif)}
          pMeninggal={getPersen(this.state.sekarang.meninggal, this.state.kemarin.meninggal)}
        />
        <Diagram positifH={this.state.positifH} sembuhH={this.state.sembuhH} meninggalH={this.state.meninggalH} />
        <Gejala />
        <Cegah />
        <Footer />
      </div>
    );
  }
}

export default Home;
