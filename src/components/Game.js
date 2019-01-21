import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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
      <div onClick={this.onClick}>
        hi there
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
		settings: state.settings
	
})

const mapDispatchToProps = {
	
}


export default connect(mapStateToProps)(Game);
