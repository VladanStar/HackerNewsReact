import React, { Component, Fragment } from "react";
import "./css-sass/App.css";
import Main from "./Main";
import Header from "./partials/Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container-fluid app">
          <div className="container">
            <div className="row">
              <Main />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
