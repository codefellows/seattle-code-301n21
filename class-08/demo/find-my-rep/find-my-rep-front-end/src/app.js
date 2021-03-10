import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Officials from './officials';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      address:'',
      officials: [],
    }
  }

  updateAddress = (e) => this.setState({ address: e.target.value });

  getRepresentatives = async (e) => {
    e.preventDefault();
    console.log(this.state.address)

    try {
      const API = 'http://localhost:3001';
      const reps = await axios.get(`${API}/representatives`, { params: {address: this.state.address }});
      console.log(reps.data)
      this.setState({ officials: reps.data });
    } catch(err) {
      console.error(err);
    }
  }

  render() {
    return(
      <>
      <Form onSubmit={this.getRepresentatives}>
        <Form.Group controlId="address">
          <Form.Label>address</Form.Label>
          <Form.Control onChange={this.updateAddress} type="text" placeholder="Enter address including city state and zip" />
          <Form.Text className="text-muted">
            We'll never share your address with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>

      {this.state.officials.length && 
        <Officials
          officials={this.state.officials}
        />
      }
      </>
    )
  }
}

export default App;
