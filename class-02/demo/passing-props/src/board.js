import React from 'react';
import Square from './square.js';
import ticTacToe from './assets/tic-tac-toe.jpg';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:'Tic-Tac-Toe'
    }
  }
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div>{this.state.title}</div>
        <img src={ticTacToe} alt="tic-tac-toe" title="tic-tac-toe" />
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;