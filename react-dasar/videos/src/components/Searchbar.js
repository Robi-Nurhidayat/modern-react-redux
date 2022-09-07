import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // TODO: make sure we call
    // callback from parent component
    this.props.onTermSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Search Video</label>
            <input
              type="text"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
