import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], videoSelect: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log(video);
  };
  render() {
    return (
      <div className="container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
