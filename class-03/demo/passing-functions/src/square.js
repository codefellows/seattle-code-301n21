import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Square extends React.Component {
  render() {
    return (
      <Button onClick={() => this.props.onClick()} variant="outline-secondary">{this.props.value}</Button>
    );
  }
}

export default Square;