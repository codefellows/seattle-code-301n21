import './CoolNumber.css';
import React from 'react';

class CoolNumber extends React.Component {
  render() {
    return (
    <div className="cool-number">
      <span className="number">{this.props.number}</span>
      <span className="description">{this.props.description}</span>
    </div>
    );
  }
}

export default CoolNumber;
