import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = () => {};
  render() {
    return (
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Search Video
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
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
