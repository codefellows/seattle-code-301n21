import React from 'react';
import './App.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageSearch: '',
      imagesToRender: [],
      searchSuccess: false,
    }
  }

  getImages = (e) => {
    e.preventDefault();
    console.log('front end', this.state.imageSearch);
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/images`, 
      {params: {
        imageSearch: this.state.imageSearch,
      }})
      .then(images => {
        console.log(images);
        this.setState({
          imagesToRender: images.data,
          searchSuccess: true,
    
        })
      })
      .catch(err => {
        console.error(err);
      })
  }

  render(){
    let allCarouselItems = this.state.imagesToRender.map((img, index) => (
      <Carousel.Item key={index}>
        <img 
          src={img.url}
          alt={img.alt}
        />
        <Carousel.Caption>
          <h2>{img.photographer}</h2>
        </Carousel.Caption>
      </Carousel.Item>
    ))
    return(
      <>
        <h1>Amazing Images</h1>
        <form onSubmit={this.getImages}>
          <label>What Would You Like To See
            <input onChange={e => this.setState({imageSearch: e.target.value})} />
          </label>
          <input type="submit" />
        </form>
        {
          this.state.searchSuccess ?
          <Container>
            <Carousel>
              {allCarouselItems}
            </Carousel>
          </Container>
          : ''
        }
      </>
    )
  }
}
export default App;
