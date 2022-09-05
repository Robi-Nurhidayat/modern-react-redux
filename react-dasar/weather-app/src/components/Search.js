import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <form>
          <input
            type="text"
            className="form-input px-4 py-3 rounded-full border-2"
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
