import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongLists extends Component {
  renderedList() {
    return this.props.song.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderedList()}</div>;
  }
}

const mapStateProps = (state) => {
  console.log(state);
  return { song: state.songs };
};

export default connect(mapStateProps, { selectSong })(SongLists);
