import React, { Component } from "react";

class SearchBar extends Component {

  render() {
    return (
      
      <div className="ui segment">
        <form 
            onSubmit={this.props.onFormSubmit} 
            className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input 
            type="text"
            onChange={this.props.onInputChange}
            value={this.props.value}
             />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
