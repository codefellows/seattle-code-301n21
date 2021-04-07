import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      director: '',
      fetchedData: false
    }
  }
  fetchData = async() => {
    console.log('fetching');
    // get the data from the API and store it in a variable
    let starWarsData = await axios.get('https://swapi.dev/api/people/1/');
    console.log(starWarsData);
    // use the variable to have fun
    let filmData = await axios.get(starWarsData.data.films[0]);
    console.log(filmData);
    this.setState({
      title: filmData.data.title,
      director: filmData.data.director,
      fetchedData: true
    });
  }

  render() {
    return ( <>
      <h1 onClick={this.fetchData}>Star Wars!</h1>
      { this.state.fetchedData ? 
        (<>
        <h2>{this.state.title}</h2>
        <h3>Directed by {this.state.director}</h3>
        </>)
       : ''}
      
      </>
    )
  }
}

export default App;
