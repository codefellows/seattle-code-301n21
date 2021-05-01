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
      name: ''
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

  handleCreateGift = (e) => {
    e.preventDefault();
    console.log('name', this.state.name, 'email', this.state.email, 'description', this.state.description);
    // make the request to the server with the info the user typed in
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
          <li key={gift._id}>{gift.name}: {gift.description} <button onClick={e => this.handleDelete(gift._id)} >Delete</button></li>
        )}
        </ul>}
      <form onSubmit={this.handleCreateGift}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onInput={this.handleNameInput}></input>
        <br />
        <label htmlFor="description">Description</label>
        <input id="description" onInput={this.handleDescriptionInput}></input>
        <br />
        <input type="submit" />
      </form>
    </>
  }
}
export default App;
