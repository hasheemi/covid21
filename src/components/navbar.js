import React, { Component } from "react";

function isActive(props, data) {
  if (props === data) {
    return "active";
  } else {
    return "off";
  }
}
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" className="checkbtn">
            <i class="bx"></i>
          </label>
          <label className="logo">Covid-21</label>
          <ul>
            <li>
              <a className={isActive(this.props.active, "home")} href="/">
                <i class="bx bxs-home bx-fw"></i> Home
              </a>
            </li>
            <li>
              <a href="/all" className={isActive(this.props.active, "all")}>
                {" "}
                <i class="bx bxs-flag-alt bx-fw"></i>data negara
              </a>
            </li>
            <li>
              <a href="/peta" className={isActive(this.props.active, "map")}>
                <i class="bx bx-map-alt bx-fw"></i> peta covid-19
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
