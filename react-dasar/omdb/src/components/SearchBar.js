import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onChangeInput = (e) => {
    this.setState({ term: e.target.value });
  };

  onSubmitInput = (e) => {
    e.preventDefault();

    this.props.onSearchInput(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitInput}>
          <div className="form-group input__col">
            <input
              type="text"
              className="form-control"
              value={this.state.term}
              onChange={this.onChangeInput}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
