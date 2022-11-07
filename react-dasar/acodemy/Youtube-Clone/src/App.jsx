import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "./assets/components/Feed";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </>
  );
};

export default App;
