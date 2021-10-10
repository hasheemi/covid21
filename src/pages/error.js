import React from "react";
import { Helmet } from "react-helmet";

export default function error(props) {
  return (
    <>
      <Helmet>
        <title>error 404</title>
      </Helmet>
      <div className="error">
        {props.children}
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <a href={props.url}>
          <button>kembali ke beranda</button>
        </a>
      </div>
    </>
  );
}
