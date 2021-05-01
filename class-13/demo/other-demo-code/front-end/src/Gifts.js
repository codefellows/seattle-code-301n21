import React from 'react';
import axios from 'axios';

class Gifts extends React.Component {
  deleteGift = async (index) => {
    const newGifts = this.props.gifts.filter((gift, i) => i !== index);

    this.props.removeAGift(newGifts);
    
    await axios.delete(`http://localhost:3001/gift/${index}`, {params: {email: this.props.email}});
  }

  render() {
    return(
      <>
      <h2>Welcome to the Gift Registry!</h2>
      <p>To find your registry, enter your email below.</p>
      {this.props.gifts.length && this.props.gifts.map((gift, idx) => (
        <div key={idx}>
          <p>name:{gift.name}</p>
          <p>description:{gift.description}</p>
          <button onClick={() => this.deleteGift(idx)}>delete</button>
        </div>
      ))}
      </>
    )
  }
}

export default Gifts;