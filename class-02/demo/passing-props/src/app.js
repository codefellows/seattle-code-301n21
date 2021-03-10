import React from 'react';
import Board from './board.js';
import './app.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>First React App - Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

export default App;
