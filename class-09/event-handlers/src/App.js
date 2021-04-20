import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {numberOfMouseovers: 0};
  }

  handleMouseover = (e) => {
    console.log('mouseover');
    this.setState({
      numberOfMouseovers: this.state.numberOfMouseovers + 1
    });
  }

  render() {
    return <h1 onMouseOver={this.handleMouseover}>App! {this.state.numberOfMouseovers}</h1>
  }
}

export default App;
