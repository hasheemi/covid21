import React from "react";

export default function footer() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#272c7c"
          fill-opacity="1"
          d="M0,96L80,128C160,160,320,224,480,213.3C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-item">
            <h4>tentang proyek</h4>
            <p>proyek ini dibuat karena kepedulian kami memberikan informasi tentang virus corona kepada masyarakat , agar tidak terjadi kesalahan informasi</p>
            <p>
              data covid-19 didapat dari <a href="https://disease.sh/">disease.sh</a>
            </p>
            <p>
              aset gambar didapat dari <a href="https://undraw.co/">undraw.co</a>
            </p>
          </div>
          <div className="footer-item">
            <h4>link penting</h4>
            <ul>
              <li>
                <a href="/all">data negara</a>
              </li>
              <li>
                <a href="/peta">peta sebaran covid-19</a>
              </li>
              <li>
                <a href="https://covid19.go.id/">website resmi covid-19 RI</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
