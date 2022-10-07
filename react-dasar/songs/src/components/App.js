import React from "react";

import SongDetail from "./SongDetail";
import SongLists from "./SongLists";

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongLists />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
