import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./components/Dashboard.js";
import configuredStore from "./store/configureStore";
import "./styles/normalize.css";
import { Provider } from "react-redux";

const store = configuredStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
