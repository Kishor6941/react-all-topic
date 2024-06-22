import React, { Component } from "react";

export class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1Count: 0,
      player2Count: 0,
      sumP1: 0,
      sumP2: 0
    };
  }

  player1Fun = () => {
    this.setState({
      player1Count: Math.floor(Math.random() * 10),
      sumP1: this.state.sumP1 + this.state.player1Count
    });
  };

  player2Fun = () => {
    this.setState({
      player2Count: Math.floor(Math.random() * 10),
      sumP2: this.state.sumP2 + this.state.player2Count
    });
  };

  result() {
    if (this.state.sumP1 >= 30) {
      return <h1>Player 1 is Winner</h1>;
    } else if (this.state.sumP2 >= 30) {
      return <h1>Player 2 is Winner</h1>;
    } else {
      return <h1>Winner is.....</h1>;
    }
  }

  render() {
    return (
      <div className="mt-4">
        <div className="mb-2">
          <button className="btn btn-success" onClick={this.player1Fun} disabled={this.state.sumP1 >=30 || this.state.sumP2 >=30}>
            <h1>Player 1</h1>
          </button>
        </div>

        <div>
          <button className="btn btn-primary" onClick={this.player2Fun} disabled={this.state.sumP2 >=30 || this.state.sumP1 >=30}>
            <h1>Player 2</h1>
          </button>
        </div>

        <div>
          <h1>Player 1 count : {this.state.sumP1}</h1>
        </div>

        <div>
          <h1>Player 2 count : {this.state.sumP2}</h1>
        </div>

        <div>{this.result()}</div>
        <div></div>
      </div>
    );
  }
}

export default Player;
