import React from "react";

class Search extends React.Component {
  state = {
    city: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.city);
  };

  render() {
    return (
      <div className="container mx-auto">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-input px-4 py-3 rounded-full border-2"
            onChange={(e) => this.setState({ city: e.target.value })}
          />
          <button
            type="submit"
            className="py-2 px-3 border-2 rounded-full ml-1"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
