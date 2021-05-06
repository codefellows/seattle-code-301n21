import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      email: '',
      gifts: [],
      name: '',
      updatingGift: '',
      isUpdating: false
    }
  }
  handleEmailInput = (e) => {
    this.setState({email: e.target.value});
  }
  handleNameInput = (e) => {
    this.setState({name: e.target.value});
  }
  handleDescriptionInput = (e) => {
    this.setState({description: e.target.value});
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.fetchUserData();
  }

  fetchUserData = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/${this.state.email}`)
    .then(serverResponse => {
      console.log(serverResponse.data);
      this.setState({
        gifts: serverResponse.data[0].gifts
      })
    });
  }

  handleGiftFormSubmit = (e) => {
    e.preventDefault();
    console.log('name', this.state.name, 'email', this.state.email, 'description', this.state.description);
    // make the request to the server with the info the user typed in
    if(this.state.isUpdating) {
      // we're updating an existing gift
      axios.put(`${process.env.REACT_APP_SERVER_URL}/gifts/${this.state.updatingGift}`,
      {
        description: this.state.description,
        user: this.state.email,
        name: this.state.name
      }).then( response => {
        console.log(response.data);
        this.setState({
          gifts: response.data,
          // clear out the form & get ready for a create or update to happen next
          isUpdating: false,
          name: '',
          description: ''
        });
      });
    } else {
      // we're creating a new gift
      axios.post(`${process.env.REACT_APP_SERVER_URL}/gifts`, {
        description: this.state.description,
        email: this.state.email,
        name: this.state.name
      }).then( response => {
        console.log(response.data);
        this.setState({
          gifts: response.data
        })
      });
    }
  }

  // when the user clicks the update button
  handleUpdate = (id) => {
    console.log('updating gift', id);
    // find the gift we want to update
    let giftToUpdate = this.state.gifts.find(gift => gift._id === id);
    // set the state based on that gift
    this.setState({
      name: giftToUpdate.name,
      description: giftToUpdate.description,
      updatingGift: id,
      isUpdating: true
    });
  }
  handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/gifts/${id}?user=${this.state.email}`).then(responseData => {
      this.setState({ 
        gifts: responseData.data
      })
    })
  }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/`)
    .then(serverResponse => console.log(serverResponse.data));
  }
  render() {
    return <>
      <h1>Gifts!</h1>
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" onInput={this.handleEmailInput} />
        <input type="submit" />
      </form>
      {this.state.gifts.length > 0 && <ul>
        {this.state.gifts.map(gift => 
          <li key={gift._id}>
            {gift.name}: {gift.description} 
            <button onClick={e => this.handleUpdate(gift._id)}>Update</button>
            <button onClick={e => this.handleDelete(gift._id)} >Delete</button>
          </li>
        )}
        </ul>}
      <form onSubmit={this.handleGiftFormSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onInput={this.handleNameInput} value={this.state.name}></input>
        <br />
        <label htmlFor="description">Description</label>
        <input id="description" onInput={this.handleDescriptionInput} value={this.state.description}></input>
        <br />
        <input type="submit" />
      </form>
    </>
  }
}
export default App;
