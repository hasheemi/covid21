import React, { Component } from "react";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="jumbotron-right">
          <h1>{this.props.title}</h1>
          <div className="paragraph">
            <p>{this.props.desc}</p>
          </div>
          <button>
            <div className="text">baca selengkapnya </div>
            <i class="bx bx-chevron-right bx-md"></i>
          </button>
        </div>
        <div className="jumbotron-left">{this.props.leftchild}</div>
      </div>
    );
  }
}
