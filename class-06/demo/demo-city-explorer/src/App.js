import React from 'react';
import axios from 'axios';

import City from './City.js';
import Search from './Search.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      haveWeSearchedYet: false,
      citySearchedFor: '',
    };
  }

  handleShowSearch = () => {
    this.setState({haveWeSearchedYet: false});
  }

  handleSearch = async(citySearchedFor) => {
    console.log('searched', citySearchedFor);

    // make request to LocationIQ
    let locationResponseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearchedFor}&format=json`);
    console.log(locationResponseData);
    this.setState({
      haveWeSearchedYet: true,
      citySearchedFor: citySearchedFor,
      locationData: locationResponseData.data[0]
    });
  }
  render() {
    return (
      <>
        <h1>City Explorer</h1>
        {this.state.haveWeSearchedYet ? 
          <City handleShowSearch={this.handleShowSearch} cityData={this.state.locationData} /> : 
          <Search handleSearch={this.handleSearch} />}
      </>
    );
  }
}

export default App;
