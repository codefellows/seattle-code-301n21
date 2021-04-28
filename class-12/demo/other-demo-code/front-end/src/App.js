import React from 'react';
import axios from 'axios';
import Cats from './Cats';
import Form from './Form';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: [],
      name: ''
    }
  }

  getMyCats = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    try {
      const cats = await axios.get(`${SERVER}/cats`, {params: { name: this.state.name }});
      console.log(cats.data)
      this.setState({ cats: cats.data });

    } catch(error){
      console.log(error);
    }
  }

  updateName = (name) => this.setState({ name });

  render() {
    return(
      <>
        <Cats cats={this.state.cats} />
        <Form 
        updateName={this.updateName} 
        getMyCats={this.getMyCats}
        />
      </>
    )
  }
}

export default App;
