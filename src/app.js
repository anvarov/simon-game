import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard.js";
import "./styles/normalize.css"

class App extends Component {
  render() {
    return <Dashboard />;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
