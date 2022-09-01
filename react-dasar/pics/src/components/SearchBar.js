import { render } from "@testing-library/react";
import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  // bentuk sebenarnya dari fungsi dibawah adalah
  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }

  // onFormSubmit = function(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }

  // untuk mengatasi error Cannot read properties of undefined (reading 'state')
  // pada fungsi diatas dengan menggunakan arrow function

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
