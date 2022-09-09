import React from "react";
import "./SearchBar.css";

class SeacrhBar extends React.Component {
  state = {
    term: "",
  };

  onChangeInput = (e) => {
    this.setState({ term: e.target.value });
  };

  onSubmitInput = (e) => {
    e.preventDefault();

    console.log(this.state.term);
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
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SeacrhBar;
