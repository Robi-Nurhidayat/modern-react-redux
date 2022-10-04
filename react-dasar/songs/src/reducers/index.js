import { combineReducers } from "redux";
const songReducers = () => {
  return [
    { title: "Aku dan Kamu", duration: "2:40" },
    { title: "Dia", duration: "3:00" },
    { title: "Hujan", duration: "3:10" },
    { title: "Yank", duration: "4:10" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducers,
  selectedSong: selectedSongReducer,
});
