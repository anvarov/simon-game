import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addScore,
  startGame,
  endGame,
  levelUp,
  makeMove
} from "../actions/game";
import "../styles/normalize.css";
import "../styles/styles.scss";

const COLORS = ["red", "blue", "green", "yellow"];

class Game extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.containerRef = React.createRef();
    this.clearClass = this.clearClass.bind(this);
  }

  clearClass = () => {
    const children = this.containerRef.current.childNodes;
    children.forEach(element => {
      element.className = "";
    });
  };

  startGame = () => {
    this.props.dispatch(startGame);
  };

  clickButton = e => {
    e.target.className = "clicked";
    if (
      this.props.game.sequence[this.props.game.moves - 1] === e.target.id &&
      this.props.game.sequence.length === this.props.game.moves
    ) {
      this.props.dispatch(makeMove(e, false, true, true));
      
    } else if (
      this.props.game.sequence[this.props.game.moves - 1] === e.target.id
    ) {
      this.props.dispatch(makeMove(e));
    } else if (
      this.props.game.sequence[this.props.game.moves - 1] !== e.target.id
    ) {
      this.props.dispatch(endGame);
    }
  };

  componentDidMount() {
    this.containerRef.current.addEventListener(
      "transitionend",
      this.clearClass
    );
  }

  componentDidUpdate() {
    if (
      this.props.game.gameStarted &&
      // this.props.game.moves === this.props.game.sequence.length &&
      this.props.game.sequence.length < this.props.game.level
    ) {
			let clickedButton = COLORS[Math.floor(Math.random() * 3)];
			console.log(clickedButton)
      this.containerRef.current.childNodes.forEach(element => {
        element.id === clickedButton
          ? (element.className = "clicked")
          : (element.className = "");
      });
      this.props.dispatch(makeMove(clickedButton, true));
    }
  }
  componentWillUnmount() {
    this.containerRef.current.removeEventListener(
      "transitionend",
      this.clearClass
    );
  }

  render() {
    return (
      <div>
        <div className="container" ref={this.containerRef}>
          <div id="red" onClick={this.clickButton} />
          <div id="yellow" onClick={this.clickButton}/>
          <div id="blue" onClick={this.clickButton}/>
          <div id="green" onClick={this.clickButton}/>
          <div id="menu">
            <button id="startGame" onClick={this.startGame}>
              Start game
            </button>
            <p>{this.props.game.score}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Game);
