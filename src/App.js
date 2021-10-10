import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import All from "./pages/Allnegara";
import Negara from "./pages/negara";
import Map from "./pages/map";
import Error from "./pages/error";
import corona from "./assets/images/emo.svg";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/all">
              <All />
            </Route>

            <Route path="/negara/:name" render={(props) => <Negara {...props} />} />
            <Route path="/peta">
              <Map />
            </Route>
            <Route path="*">
              <Error title="url tidak ditemukan" desc="mohon periksa kembali penulisan url anda , jika ini kesalahan hubungi hasemiandika78@gmail.com" url="/">
                <div className="head404">
                  <span>4</span>
                  <img src={corona} alt="404" />
                  <span>4</span>
                </div>
              </Error>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
