import React from 'react';
import axios from 'axios';
import Gifts from './Gifts';
import Form from './Form';
import AddAGift from './AddAGift';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayAddAGift: false,
      gifts: [],
      birthdayPersonEmail: '',
      giftName: '',
      giftDescription: ''
    }
  }

  getMyGifts = async (e) => {
    e.preventDefault();
    const SERVER = 'http://localhost:3001';
    try {
      const gifts = await axios.get(`${SERVER}/gift`, {params: { email: this.state.birthdayPersonEmail }});
      this.setState({ gifts: gifts.data });

    } catch(error){
      console.log(error);
    }
  }

  addGiftName = (giftName) => this.setState({ giftName });
  addGiftDescription = (giftDescription) => this.setState({ giftDescription });

  createGift = async (e) => {
    e.preventDefault();
    const API = 'http://localhost:3001';
    const gifts = await axios.post(`${API}/gift`, {newGift: {name: this.state.giftName, description: this.state.giftDescription}, email: this.state.birthdayPersonEmail});
    const allGiftsArray = gifts.data;
    this.setState({ gifts: allGiftsArray, displayAddAGift: false });
  }

  updateEmail = (email) => this.setState({ birthdayPersonEmail: email });

  removeAGift = (arrayOfGifts) => this.setState({ gifts: arrayOfGifts });

  render() {
    return(
      <>
        <Gifts 
          gifts={this.state.gifts} 
          email={this.state.birthdayPersonEmail}
          removeAGift={this.removeAGift}
        />
        <Form 
          updateEmail={this.updateEmail} 
          getMyGifts={this.getMyGifts}
        />

        <button onClick={() => this.setState({ displayAddAGift: true })}>Add a Gift</button>

        {this.state.displayAddAGift && 
          <AddAGift
            addGiftName={this.addGiftName}
            addGiftDescription={this.addGiftDescription}
            createGift={this.createGift}
          />
        }
      </>
    )
  }
}

export default App;
