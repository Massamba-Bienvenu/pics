import React, { Component } from "react";
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    term: ""
  };

  handleSearchSubmit = (term) => {
    console.log(term);
  }

  handleInputChange = (event) => {
    this.setState({term: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.handleSearchSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
        onInputChange={this.handleInputChange}
        value={this.state.term}
        onFormSubmit={this.handleFormSubmit}
         />
      </div>
    );
  }
}

export default App;
