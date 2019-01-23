import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../styles/styles.scss";

class Game extends Component {
  constructor(props) {
    super(props);
    this.onClick = e => {
      return props.dispatch({
        type: "SET_VOLUME_UP",
        id: e
      });
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div id="red" />
        <div id="red_background"></div>
        <div id="blue" />
        <div id="blue_background"></div>
        <div id="menu"></div>
        <div id="yellow" />
        <div id="yello_background"></div>
        <div id="green" />
        <div id="green_background"></div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  settings: state.settings
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Game);
