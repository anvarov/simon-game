import React, { Component } from "react";
import { connect } from "react-redux";
import { levelUp, startGame, endGame, makeMove } from "../actions/game";
import "../styles/normalize.css";
import "../styles/styles.scss";

const sound1 = new Audio(require("../sounds/1.ogg")),
  sound2 = new Audio(require("../sounds/2.ogg")),
  sound3 = new Audio(require("../sounds/3.ogg")),
  sound4 = new Audio(require("../sounds/3.ogg"));

const COLORS = ["red", "blue", "green", "yellow"];
const playSound = clickedButton => {
  switch (clickedButton) {
    case "red":
      sound1.play();
      break;
    case "yellow":
      sound2.play();
      break;
    case "green":
      sound3.play();
      break;
    case "blue":
      sound4.play();
      break;
    default:
      break;
  }
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.onClick = this.onClick.bind(this);
    this.containerRef = React.createRef();
    this.clearClass = this.clearClass.bind(this);
  }

  clearClass = () => {
    const children = this.containerRef.current.childNodes;
    for (let index = 0; index < 5; index++) {
      children[index].className = "";
    }
  };

  startGame = () => {
    this.props.dispatch(startGame);
  };

  onClick = e => {
    const clickedButton = e.target.id;
    clickedButton && playSound(clickedButton);
    e.target.className = "clicked";
    if (
      this.props.game.gameStarted &&
      this.props.game.playerMoves + 1 < this.props.game.sequence.length
    ) {
      clickedButton === this.props.game.sequence[this.props.game.playerMoves]
        ? this.props.dispatch(makeMove(clickedButton, false))
        : this.props.dispatch(endGame);
    } else if (
      this.props.game.gameStarted &&
      this.props.game.sequence.length === this.props.game.playerMoves + 1
    ) {
      clickedButton === this.props.game.sequence[this.props.game.playerMoves]
        ? this.props.dispatch(levelUp)
        : this.props.dispatch(endGame);
    }
  };

  componentDidMount() {
    this.containerRef.current.addEventListener(
      "transitionend",
      this.clearClass
    );
  }

  componentDidUpdate() {
    //right after game start
    let clickedButton = COLORS[Math.floor(Math.random() * 3)];
    if (this.props.game.gameStarted && this.props.game.sequence.length === 0) {
      setTimeout(
        ctx => {
          playSound(clickedButton);
          ctx.containerRef.current.childNodes.forEach(element => {
            element.id === clickedButton
              ? (element.className = "clicked")
              : (element.className = "");
          });
          ctx.props.dispatch(makeMove(clickedButton, true, true));
        },
        1200,
        this
      );
      return;
    } else if (
      this.props.game.gameStarted &&
      this.props.game.playerMoves === 0 &&
      this.props.game.sequence.length > this.props.game.computerMoves
    ) {
      setTimeout(
        ctx => {
          clickedButton = ctx.props.game.sequence[ctx.props.game.computerMoves];
          playSound(clickedButton);
          ctx.containerRef.current.childNodes.forEach(element => {
            element.id === clickedButton
              ? (element.className = "clicked")
              : (element.className = "");
          });
          ctx.props.dispatch(makeMove(clickedButton, true));
        },
        1200,
        this
      );
      return;
    } else if (
      this.props.game.gameStarted &&
      this.props.game.playerMoves === 0 &&
      this.props.game.sequence.length === this.props.game.computerMoves &&
      this.props.game.level !== 1 &&
      this.props.game.sequence.length <= this.props.game.level
    ) {
      // console.log(clickedButton, "from cdu");
      console.log(this.props.game.sequence);

      setTimeout(
        ctx => {
          clickedButton = COLORS[Math.floor(Math.random() * 3)];
          ctx.containerRef.current.childNodes.forEach(element => {
            element.id === clickedButton
              ? (element.className = "clicked")
              : (element.className = "");
          });
          console.log("from timer");
          playSound(clickedButton);
          ctx.props.dispatch(makeMove(clickedButton, true, true));
        },
        1200,
        this
      );
      return;
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
          <audio src={sound1} id="sound1" />
          <div id="red" onClick={this.onClick} />
          <div id="yellow" onClick={this.onClick} />
          <div id="blue" onClick={this.onClick} />
          <div id="green" onClick={this.onClick} />
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
