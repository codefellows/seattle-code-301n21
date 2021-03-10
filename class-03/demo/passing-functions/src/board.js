import React from 'react';
import Square from './square.js';
import ticTacToe from './assets/tic-tac-toe.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  /**
   * we want this.state.squares to look something like this:
   [
     'O', null, 'X',
     'X', 'X', 'O',
     'O', null, null,
   ] 
   */

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  handleClick(i) {
    // creates a copy of the squares array so that we can modify it without modifying the existing array
    const squares = this.state.squares.slice();

    // a good time to go over ternaries
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ticTacToe} />
          <Card.Body>
            <Card.Title>{status}</Card.Title>
          </Card.Body>
        </Card>

        <Table striped bordered hover responsive="sm">
          <tbody>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </tbody>
        </Table>  
      </div>
    );
  }
}

export default Board;