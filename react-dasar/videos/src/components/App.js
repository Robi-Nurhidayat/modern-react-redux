import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../api/youtube";

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };
  render() {
    return (
      <div className="container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
