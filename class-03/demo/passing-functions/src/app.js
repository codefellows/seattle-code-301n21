import React from 'react';
import Board from './board.js';
import Header from './header';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header title={'First React App - Tic Tac Toe'} />
        <Board />
      </div>
    );
  }
}

export default App;