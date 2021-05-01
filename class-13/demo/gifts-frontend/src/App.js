import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/')
    .then(data => console.log(data));
  }
  render() {
    return <>
      <h1>Gifts!</h1>
    </>
  }
}
export default App;
