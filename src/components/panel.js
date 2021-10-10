import React, { Component } from "react";

import positif from "../assets/images/VirusIcon.svg";
import negatif from "../assets/images/Iconvirus2.svg";
import meniinggal from "../assets/images/Iconvirus3.svg";
export default class panel extends Component {
  render() {
    return (
      <div className="panel" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">
        <div className="item">
          <div className="panel-right">
            <img src={this.props.flag} alt="" />
          </div>
          <div className="panel-left">
            <div>data corona</div>
            <div>
              <b>{this.props.from}</b>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="panel-right">
            <img src={positif} alt="" />
          </div>
          <div className="panel-left">
            <div>positif</div>
            <div>
              <b>{this.props.positif}</b>
            </div>
            <div className="persentase" id={this.props.pPositif > 0 ? "up" : "down"}>
              <i className={this.props.pPositif > 0 ? "bx bx-trending-up" : "bx bx-trending-down"}></i>
              {this.props.pPositif > 0 ? this.props.pPositif : Math.abs(this.props.pPositif) || 0} <p>%</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="panel-right">
            <img src={negatif} alt="" />
          </div>
          <div className="panel-left">
            <div>sembuh</div>
            <div>
              <b>{this.props.sembuh}</b>
            </div>
            <div className="persentase" id={this.props.pNegatif > 0 ? "up" : "down"}>
              <i className={this.props.pNegatif > 0 ? "bx bx-trending-up" : "bx bx-trending-down"}></i>
              {this.props.pNegatif > 0 ? this.props.pNegatif : Math.abs(this.props.pNegatif) || 0} <p>%</p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="panel-right">
            <img src={meniinggal} alt="" />
          </div>
          <div className="panel-left">
            <div>meninggal</div>
            <div>
              <b>{this.props.meninggal}</b>
            </div>
            <div className="persentase" id={this.props.pMeninggal > 0 ? "up" : "down"}>
              <i className={this.props.pMeninggal > 0 ? "bx bx-trending-up" : "bx bx-trending-down"}></i>
              {this.props.pMeninggal > 0 ? this.props.pMeninggal : Math.abs(this.props.pMeninggal) || 0} <p>%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
