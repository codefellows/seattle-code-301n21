import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

// when the user loads the app, it should display all the moods

// it should have a form for the user to enter in new moods
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://localhost:3001/moods').then(response => {
      console.log(response.data);
      this.setState({
        moods: response.data
      })
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let dataForServer = {
      emotion: e.target.emotion.value,
      intensity: e.target.intensity.value
    };
    console.log(dataForServer);
    axios.post('http://localhost:3001/moods', dataForServer)
      .then(responseData => {
        this.fetchData();
      })
  }

  handleDelete = (id) => {
    axios.delete(`http://localhost:3001/moods/${id}`).then(responseData => {
      // remove the item from our array
      this.fetchData();
    });
  }
  render() {
    return <>
      <h1>Moods!</h1>
      <Carousel>
        {this.state.moods && this.state.moods.map(mood => (
          <Carousel.Item key={mood._id}>
            <Carousel.Caption>
              <h2>{mood.emotion}</h2>
              <p>Level {mood.intensity} on {mood.date}</p>
              <Button onClick={() => this.handleDelete(mood._id)}>Delete</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group controlId="formEmotion">
          <Form.Label>Emotion</Form.Label>
          <Form.Control name="emotion"/>
        </Form.Group>
        <Form.Group controlId="formIntensity">
          <Form.Label>Intensity</Form.Label>
          <Form.Control type="number" name="intensity" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>;
  }
}

export default App;
