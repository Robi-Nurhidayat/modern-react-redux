import React from "react";
import { connect } from "react-redux";
import { selectedSongAction } from "../action";

class SongsList extends React.Component {
  renderedList() {
    return this.props.song.map((song) => {
      return (
        <li key={song.title}>
          {song.title}
          <button onClick={() => this.props.selectedSongAction(song)}>
            Select
          </button>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderedList()}</ul>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  console.log(state);
  return {
    song: state.songs,
  };
};

export default connect(mapStateProps, { selectedSongAction })(SongsList);
