import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <form onSubmit={(e) => this.props.getMyGifts(e)}>
        <label>What is the birthday person's email?</label>
        <input onChange={(e) => this.props.updateEmail(e.target.value)}></input>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default Form;
