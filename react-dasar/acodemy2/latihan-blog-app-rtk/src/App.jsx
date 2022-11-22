import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddPost from "./app/post/AddPost";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-lg p-9 mx-auto">
        <Routes>
          <Route path="/" exact />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
