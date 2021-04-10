import axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleButtonClick = async () => {
    let shoppingListData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/shopping-list`);
    console.log(shoppingListData);
    this.setState({
      data: shoppingListData.data
    });
  }
  render() {
    return (
      <>
        <h1>Shopping list!</h1>
        <button onClick={this.handleButtonClick}>What's on my shopping list?</button>
        { this.state.data ? (
          <ul>
            {this.state.data.map( item => (
            <li key={item}>{item}</li>
            ))}
          </ul>
        ) : ''}
      </>
    )
  }
}

export default App;
