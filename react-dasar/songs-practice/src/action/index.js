export const selectedSongAction = (song) => {
  return {
    type: "SELECT_SONG",
    payload: song,
  };
};
