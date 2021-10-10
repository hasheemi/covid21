import React, { Component } from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Panel from "../components/panel";
import { ratio } from "../assets/js/mean";
import { numberWithCommas } from "../assets/js/commas";
import Diagram from "../components/diagram";
import { Helmet } from "react-helmet";
import "../assets/css/vaccine.css";
import { getPersen } from "../assets/js/persen";
import Footer from "../components/footer";
import Error from "./error";
import corona from "../assets/images/emo.svg";
import "../assets/css/error.css";

export default class negara extends Component {
  state = {
    error1: "",
    error2: "",
    data: {},
    flag: "",
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
    positif: 0,
    sembuh: 0,
    meninggal: 0,
    positifH: [],
    sembuhH: [],
    meninggalH: [],
    populasi: 0,
    vaksin: 0,
    vaksinp: 0,
  };
  componentDidMount() {
    fetch(`https://disease.sh/v3/covid-19/countries/${this.props.match.params.name}?strict=true`).then((response) => {
      if (response.status === 404) {
        this.setState({ error1: 404 });
      } else {
        console.log("SUCCES");
        fetch(`https://disease.sh/v3/covid-19/countries/${this.props.match.params.name}?strict=true`)
          .then((response) => response.json())
          .then(
            (res) =>
              this.setState({
                data: res,
                flag: res.countryInfo.flag,
                sekarang: {
                  positif: res.todayCases,
                  negatif: res.todayRecovered,
                  meninggal: res.todayDeaths,
                },
                positif: numberWithCommas(res.cases),
                sembuh: numberWithCommas(res.recovered),
                meninggal: numberWithCommas(res.deaths),
                populasi: res.population,
              })
            // eslint-disable-next-line no-undef
          );

        fetch(`https://disease.sh/v3/covid-19/countries/${this.props.match.params.name}?yesterday=1&strict=true`)
          .then((respone) => respone.json())
          .then((response) =>
            this.setState({
              kemarin: {
                positif: response.todayCases,
                negatif: response.todayRecovered,
                meninggal: response.todayDeaths,
              },
            })
          );
        fetch(`https://disease.sh/v3/covid-19/historical/${this.props.match.params.name}?lastdays=14`).then((response) => {
          if (response.status === 404) {
            this.setState({ error2: true });
          } else {
            this.setState({
              error2: false,
            });
            response.json().then((res) =>
              this.setState({
                positifH: res.timeline.cases,
                meninggalH: res.timeline.deaths,
                sembuhH: res.timeline.recovered,
              })
            );
          }
        });
        fetch(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${this.props.match.params.name}?lastdays=1&fullData=true`)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              vaksin: data.timeline[0].total,
            });

            this.setState({
              vaksinp: getPersen(this.state.vaksin, this.state.populasi),
            });
            console.log(this.state.vaksinp);
          });
      }
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{`data covid-19 negara ${this.state.data.country}`}</title>
          <link rel="shortcut icon" href={this.state.flag} type="image/x-icon" />
          <meta name="description" content={`berbagai negara di dunia terdampak virus corona , salah satunya yaitu ${this.state.data.country}, berikut ini data covid-19 dari negara ${this.state.data.country}`} />
        </Helmet>
        {this.state.error1 === 404 ? (
          <Error title={`negara "${this.props.match.params.name}" tidak ditemukan`} desc="negara tidak ditemukan, bisa jadi tidak ada di database kami atau tidak memiliki kasus covid-19" url="/all">
            <div className="negara404">
              <div className="blob">
                <img src="https://disease.sh/assets/img/flags/unknown.png" alt="negara tidak ditemukan" />
              </div>
            </div>
          </Error>
        ) : (
          <>
            <Navbar active="all" />
            <Jumbotron
              desc={`berbagai negara di dunia terdampak virus corona , salah satunya yaitu ${this.state.data.country}, berikut ini data covid-19 dari negara ${this.state.data.country} `}
              title={`data covid-19 negara ${this.state.data.country}`}
              leftchild={<img id="mega-flag" src={this.state.flag} alt="" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" />}
            />
            <Panel
              flag={this.state.flag}
              from={this.state.data.country}
              positif={this.state.positif}
              sembuh={this.state.sembuh}
              meninggal={this.state.meninggal}
              pPositif={ratio(this.state.sekarang.positif, this.state.kemarin.positif)}
              pNegatif={ratio(this.state.sekarang.negatif, this.state.kemarin.negatif)}
              pMeninggal={ratio(this.state.sekarang.meninggal, this.state.kemarin.meninggal)}
            />
            {this.state.error2 === true ? (
              <div className="diagram-container">
                <div id="diagram-error">
                  <span>maaf, data diagram untuk negara {this.state.data.country} tidak tersedia</span>
                </div>
              </div>
            ) : (
              <Diagram positifH={this.state.positifH} sembuhH={this.state.sembuhH} meninggalH={this.state.meninggalH} />
            )}
            <br />
            <Footer />
          </>
        )}
      </div>
    );
  }
}
