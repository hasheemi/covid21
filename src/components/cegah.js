import React from "react";
import cegah1 from "../assets/images/cegah (1).png";
import cegah2 from "../assets/images/cegah (2).png";
import cegah3 from "../assets/images/cegah (3).png";
import cegah4 from "../assets/images/cegah (4).png";
import cegah5 from "../assets/images/cegah (5).png";

export default function Cegah() {
  return (
    <div className="cegah">
      <h1>cara mencegah penularan virus corona</h1>
      <div className="cegah-main">
        <div className="card">
          <img src={cegah1} alt="" />
          <h4>mencuci tangan</h4>
          <p>mencuci tangan membersihkan tangan dari virus termasuk virus corona</p>
        </div>
        <div className="card">
          <img src={cegah2} alt="" />
          <h4>memakai masker </h4>
          <p>memakai masker mencegah keluarnya droplet yang menularkan virus corona</p>
        </div>
        <div className="card">
          <img src={cegah3} alt="" />
          <h4>menjaga jarak</h4>
          <p>menjaga jarak mencegah menularnya virus corona dari orang lain</p>
        </div>
        <div className="card">
          <img src={cegah4} alt="" />
          <h4>beraktivitas dari rumah</h4>
          <p>beraktivitas dari rumah menjaga kita dari virus corona dari dunia luar</p>
        </div>
        <div className="card">
          <img src={cegah5} alt="" />
          <h4>mengurangi mobilitas</h4>
          <p>kurangi mobilitas agar penyebaran mata rantai virus corona dapat terhenti</p>
        </div>
      </div>
    </div>
  );
}
