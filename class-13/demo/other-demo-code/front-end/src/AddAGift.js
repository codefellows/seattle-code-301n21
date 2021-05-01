import React from 'react';

class AddAGift extends React.Component {
  render() {
    return(
      <form onSubmit={(e) => this.props.createGift(e)}>
        <label>name of gift</label>
        <input onChange={(e) => this.props.addGiftName(e.target.value)}></input>
        <label>describe gift</label>
        <input onChange={(e) => this.props.addGiftDescription(e.target.value)}></input>
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default AddAGift;
