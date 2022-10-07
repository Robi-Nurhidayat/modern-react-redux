import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Detail Song :</h3>
      <p>{song.title}</p>
      <p>{song.duration}</p>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateProps)(SongDetail);
