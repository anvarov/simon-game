import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../styles/styles.scss";
import { transitionEnded, setPlayerTurn, buttonClicked, computerClick } from "../actions/game";

class Game extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.transitionEnded = () => {
      this.props.dispatch(transitionEnded);
    };
    // this.computerPicker = container => {
    //   if (
    //     this.props.game.computerTurns < this.props.game.round ||
    //     this.props.game.computerTurns === this.props.game.playerTurns
    //   ) {
    //     const randomPick = Math.floor(Math.random() * 3);
    //     container.childNodes[randomPick].click();
    //   }
    // };
    this.onClick = e => {
      if (this.props.game.computerTurns < this.props.game.playerTurns) {
        return false;
      }
      e.persist();
      this.props.dispatch(buttonClicked(e));
    };

    this.transitionEnded = this.transitionEnded.bind(this);
    this.onClick = this.onClick.bind(this);
    this.computerPicker = this.computerPicker.bind(this);
  }

  componentDidMount() {
    const container = this.containerRef.current;
    if (this.props.game.round === 0){
      this.props.dispatch(computerClick)
    }
    container.addEventListener("transitionend", this.transitionEnded);
    // window.addEventListener("load", this.computerPicker(container));
  }

  componentWillUnmount() {
    const container = this.containerRef.current;
    container.removeEventListener("transitionend", this.transitionEnded);
    // window.removeEventListener("load", this.computerPicker(container));
  }
  render() {
    return (
      <div className="container" ref={this.containerRef}>
        <div
          id="red"
          onClick={this.onClick}
          className={
            !this.props.game.isTransitionEnded &&
            this.props.game.buttonClicked === "red"
              ? "clicked"
              : ""
          }
        />
        <div
          id="blue"
          onClick={this.onClick}
          className={
            !this.props.game.isTransitionEnded &&
            this.props.game.buttonClicked === "blue"
              ? "clicked"
              : ""
          }
        />
        <div
          id="yellow"
          onClick={this.onClick}
          className={
            !this.props.game.isTransitionEnded &&
            this.props.game.buttonClicked === "yellow"
              ? "clicked"
              : ""
          }
        />
        <div
          id="green"
          onClick={this.onClick}
          className={
            !this.props.game.isTransitionEnded &&
            this.props.game.buttonClicked === "green"
              ? "clicked"
              : ""
          }
        />
        <div id="menu" />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  settings: state.settings,
  game: state.game
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Game);
