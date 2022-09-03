import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID 2m6wDpQLldiPbuQU2eswOHJXRhwEWeTDiNv3ZwQ0-Mg",
      },
    });

    console.log(response);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <h5>Found {this.state.images.length} images</h5>
      </div>
    );
  }
}

export default App;
