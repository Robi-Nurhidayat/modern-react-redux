import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [],
  };

  onSearchInput = (movie) => {
    console.log(movie);
  };
  render() {
    return (
      <div className="container mt-1">
        <SearchBar onSearchInput={this.onSearchInput} />
      </div>
    );
  }
}

export default App;
