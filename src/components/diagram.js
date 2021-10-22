import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function data(array, color, label) {
  const obj = {
    labels: label,
    datasets: [
      {
        label: "cases",
        data: array,
        fill: false,
        backgroundColor: color,
        borderColor: color,
      },
    ],
  };
  return obj;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

function getData(json) {
  let result = [];
  for (var i in json) result.push(json[i]);
  return result;
}
function getLabel(json) {
  let result = [];
  for (var i in json) result.push([i]);
  return result;
}
// export default class diagram extends Component {
//   render() {
//     return (

//   }
// }

export default function Diagram(props) {
  const [type, setType] = useState("positif");
  useEffect(() => {
    document.getElementById("positif-chart").removeAttribute("class");
    document.getElementById("sembuh-chart").removeAttribute("class");
    document.getElementById("meninggal-chart").removeAttribute("class");
    document.getElementById(type + "-chart").setAttribute("class", "active");
  }, [type]);

  return (
    <div>
      <div className="diagram-container" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">
        <div className="chart-con">
          {/* {console.log(this.props.positifH)} */}
          <h1>
            <i class="bx bx-line-chart bx-fw"></i>grafik pasien {type} covid-19 dalam 2 minggu terakhir
          </h1>
          <div id="positif-chart" className="active" name="chart">
            <Line data={data(getData(props.positifH), "red", getLabel(props.positifH))} options={options} />
          </div>
          <div id="sembuh-chart" name="chart">
            <Line data={data(getData(props.sembuhH), "green", getLabel(props.sembuhH))} options={options} />
          </div>
          <div id="meninggal-chart" name="chart">
            <Line data={data(getData(props.meninggalH), "black", getLabel(props.meninggalH))} options={options} />
          </div>
        </div>
        <div className="controller">
          <div className="positif-rad rad" onClick={() => setType("positif")}>
            <input type="radio" name="control" id="positif" />
            <label htmlFor="positif">
              <div className="box-icon"></div>positif
            </label>
          </div>
          <div className="sembuh-rad rad" onClick={() => setType("sembuh")}>
            <input type="radio" name="control" id="sembuh" />
            <label htmlFor="sembuh">
              <div className="box-icon"></div>sembuh
            </label>
          </div>
          <div className="meninggal-rad rad" onClick={() => setType("meninggal")}>
            <input type="radio" name="control" id="meninggal" />
            <label htmlFor="meninggal">
              <div className="box-icon"></div>meninggal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
