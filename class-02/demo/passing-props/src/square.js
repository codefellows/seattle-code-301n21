import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    console.log('props and state', this.props, this.state)
    return (
      // <button className="square" onClick={() => { alert('click'); }}>
    <button
      className="square"
      onClick={() => this.setState({value: 'X'})}
    >
        {this.state.value}
      </button>
    );
  }
}

export default Square;