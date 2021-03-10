import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


class Header extends React.Component {
  render() {
    return(
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
        </Navbar>
      </Container>
    )
  }
}

export default Header;