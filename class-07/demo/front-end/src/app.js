import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      shoppingList:[]
    }
  }

  getShoppingList = async () => {
    const API = 'http://localhost:3001';
    const shoppingList = await axios.get(`${API}/shoppingList`);
    this.setState({ shoppingList: shoppingList.data });
  }

  render() {
    return(
      <>
      <button onClick={this.getShoppingList}>Get Shopping List</button>
      {this.state.shoppingList.length && this.state.shoppingList.map((item, idx) => (
        <div key={idx}>
          {item}
        </div>
      ))}
      </>
    )
  }
}

export default App;
