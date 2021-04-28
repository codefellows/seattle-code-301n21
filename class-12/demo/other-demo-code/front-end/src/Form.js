import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={(e) => this.props.getMyCats(e)}>
        <label>What is your name?</label>
        <input onChange={(e) => this.props.updateName(e.target.value)}></input>
      </form>
    )
  }
}

export default Form;
