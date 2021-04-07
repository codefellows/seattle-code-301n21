import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }
  handleFormSubmitted = (event) => {
    // let the Search component handle the form weirdness
    event.preventDefault();
    // grab the text box info to send to the parent
    // send the information to the app component
    this.props.handleSearch(this.textInput.current.value);
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmitted}>
        <input type="text" ref={this.textInput} />
        <input type="submit" />
      </form>
    )
  }
}

export default Search;
