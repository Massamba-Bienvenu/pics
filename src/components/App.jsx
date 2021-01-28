import React, { Component } from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    images: [],
    term: "",
  };

  handleSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  handleInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.handleSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onInputChange={this.handleInputChange}
          value={this.state.term}
          onFormSubmit={this.handleFormSubmit}
        />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
