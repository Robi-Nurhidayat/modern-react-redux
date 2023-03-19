import React from "react";
import Tablepage from "./pages/Tablepage";

const App = () => {
  return (
    <div
      style={{ maxWidth: "60%" }}
      className="mx-auto border p-10 flex justify-center"
    >
      <Tablepage />
    </div>
  );
};

export default App;
