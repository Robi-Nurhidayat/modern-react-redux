import React from "react";
import { selectSong } from "../actions";
import SongLists from "./SongLists";

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongLists />
        </div>
      </div>
    </div>
  );
}

export default App;
