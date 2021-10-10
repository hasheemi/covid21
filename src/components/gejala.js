import React from "react";
import gejalapng from "../assets/images/gejala.png";

export default function Gejala() {
  return (
    <div className="gejala">
      <h1>gejala virus corona (covid-19)</h1>
      <div className="gejala-main">
        <div className="gejala-left" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
          <div className="p">
            <p>gejala covid-19 diantara lain:</p>
            <div id="list">
              <li>batuk kering</li>
              <li>demam</li>
              <li>flu</li>
              <li>anomsia (kehilangan kemampuan perasa dan pembau)</li>
              <li>sesak napas</li>
            </div>

            <p>jika anda memiliki gejala tersebut segera datang ke fasilitas kesehatan untuk menjalani test swab/ rapid test covid-19</p>
            <button>
              <div className="text"> baca lebih lanjut</div> <i class="bx bx-chevron-right bx-md"></i>
            </button>
          </div>
        </div>
        <div className="gejala-right" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
          <img src={gejalapng} alt="gejala covid-19" />
        </div>
      </div>
    </div>
  );
}
