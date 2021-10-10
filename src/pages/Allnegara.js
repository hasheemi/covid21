import React, { Component } from "react";
import Navbar from "../components/navbar";
import { numberWithCommas } from "../assets/js/commas";
import Jumbotron from "../components/jumbotron";
import "../assets/css/table.css";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import globe from "../assets/images/GlobeIcon.svg";
export default class Allnegara extends Component {
  state = {
    data: [],
    random: [],
    id: 1,
    pp: 20,
    pag: [],
    setPerpage: [20, 30, 40, 50, 100],
  };

  componentDidMount() {
    console.clear();
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((res) => {
        let ranarr = [];
        let numPage = [];
        // for (let index = 0; index < res.length; index++) {
        //   console.log(res[index].country);
        // }
        for (let i = 0; i <= 8 && i !== 55 && i !== 117; i++) {
          ranarr.push(Math.round(Math.random() * res.length));
        }
        for (let i = 1; i <= Math.ceil(res.length / this.state.pp); i++) {
          numPage.push(i);
        }
        this.setState({
          data: res,
          random: ranarr,
          pag: numPage,
        });
        console.log(this.state);
      });
  }
  search(e) {
    let filter, table, tr, td, i, txtValue;

    filter = e.target.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  isActive(a) {
    let id = this.state.id;
    return a > (id - 1) * this.state.pp && id * this.state.pp >= a ? "ac" : "none";
  }

  setPerpage() {
    let numArr = [];
    for (let i = 0; i < Math.ceil(this.state.data.length / this.state.pp); i++) {
      numArr.push(i);
    }
    return numArr;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>data covid-19 di berbagai negara</title>
          <link rel="shortcut icon" href={globe} type="image/x-icon" />
        </Helmet>
        <Navbar active="all" />
        <Jumbotron
          desc="menyajikan data covid-19 dari berbagai negara asia , eropa dan lain-lain , mencakup kasus positif , sembuh dan meninggal
"
          title="data covid-19 dari berbagai negara"
          leftchild={
            <div>
              <div className="flag-con">
                {this.state.random.map((data) => (
                  <img src={this.state.data[data].countryInfo.flag} alt={this.state.data[data].country} className="flag" />
                ))}
              </div>
            </div>
          }
        />
        <div className="main-con">
          <div className="table-tools">
            <input type="text" id="myInput" onChange={this.search} placeholder="cari nama negara ........" />
            <select name="setperpage" id="setperpage" value={this.state.pp} onChange={(e) => this.setState({ pp: e.target.value })}>
              {this.state.setPerpage.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </div>
          <div className="table-co">
            <table id="myTable">
              <tr>
                <th>no</th>
                <th>bendera</th>
                <th>negara</th>
                <th className="positif">positif</th>
                <th className="sembuh">sembuh</th>
                <th className="meninggal">meninggal</th>
                <th>detail</th>
              </tr>
              {this.state.data.map((data, index) => (
                <tr className={this.isActive(index + 1)}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={data.countryInfo.flag} alt={data.country} />
                  </td>
                  <td>{data.country}</td>

                  <td className="positif">{numberWithCommas(data.cases)}</td>
                  <td className="sembuh">{numberWithCommas(data.recovered)}</td>
                  <td className="meninggal">{numberWithCommas(data.deaths)}</td>
                  <td>
                    <a href={`/negara/${data.countryInfo.iso2}`} className="detail-link">
                      detail
                    </a>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="pagination">
            {this.setPerpage().map((data) => (
              <button id={data + 1} onClick={() => this.setState({ id: data + 1 })} className={this.state.id === data + 1 ? "active" : "pasif"}>
                {data + 1}
              </button>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
