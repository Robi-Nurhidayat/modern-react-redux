import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Aku dan dia",
      band: "Angkasa",
    },
    {
      title: "Aku",
      band: "Peterpan",
    },
    {
      title: "Manusia Bodoh",
      band: "Ada Band",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
