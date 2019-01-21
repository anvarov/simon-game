import React, { Component } from "react";
import Game from '../components/Game'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Game />
        {/* <HighScores />
        <Options />
        <HowToPlay /> */}
      </div>
    );
  }
}

export default Dashboard;
