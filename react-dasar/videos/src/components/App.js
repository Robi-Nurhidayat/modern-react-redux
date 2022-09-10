import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

class App extends React.Component {
  state = { videos: [], videoSelect: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      videoSelect: response.data.items[0],
    });
  };

  componentDidMount() {
    this.onTermSubmit("gta");
  }

  onVideoSelect = (video) => {
    this.setState({ videoSelect: video });
  };

  render() {
    return (
      <div className="container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="container__video">
          <VideoDetail video={this.state.videoSelect} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default App;
