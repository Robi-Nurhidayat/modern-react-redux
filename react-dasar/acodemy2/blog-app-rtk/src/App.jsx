import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPost from "./app/post/AddPost";

import PostList from "./app/post/PostList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-2xl mx-auto pt-6">
        <Routes>
          <Route path={"/"} exact element={<PostList />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
