import React from 'react';
import './app.css';
import Board from './board.js';

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
