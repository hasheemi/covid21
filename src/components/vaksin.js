import React from "react";
import { numberWithCommas } from "../assets/js/commas";
export default function vaksin(props) {
  return (
    <div className="vaccine">
      <div className="vaccine-circle" id="vaccine-progress">
        <div className="vaccine-persentage" id="vaccine-persentage">
          40%
        </div>
      </div>
      <div className="vaccine-desc">
        <h4>ada 40% warga negara indonesia sudah divaksin covid-19</h4>
        <p>vaksin covid-19 bisa digunakan untuk mencegah penularan covid-19 , jika sudah usdah terkena vaksin bisa meringankan gejala covid-19</p>
        <p>ayo ikuti vaksinasi covid-19 , dengan vaksin kita bisa menghadapi covid-19</p>
        <p>
          {numberWithCommas(props.vaksin)} - {numberWithCommas(props.populasi)}
        </p>
      </div>
    </div>
  );
}
