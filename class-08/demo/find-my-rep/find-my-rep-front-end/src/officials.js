import React from 'react';

class Officials extends React.Component {
  render() {
    return(
      this.props.officials.map((person, idx) => (
        <div key={idx}>
          {person.photoUrl && 
            <img src={person.photoUrl} />
          }
          <span>{person.name}</span>
        </div>
      ))
    )
  }
}

export default Officials;