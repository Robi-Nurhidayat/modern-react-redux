import React, { Component } from "react";
import { connect } from "react-redux";

class SongLists extends Component {
  renderedList() {
    return this.props.song.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderedList()}</div>;
  }
}

const mapStateProps = (state) => {
  return { song: state.songs };
};

export default connect(mapStateProps)(SongLists);
