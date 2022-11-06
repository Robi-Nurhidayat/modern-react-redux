import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { Email } from "./components/Email";
import Alamat from "./components/Alamat";
import NotFound from "./components/NotFound";
import Posts from "./components/posts/Posts";
import DetailsPosts from "./components/posts/DetailsPosts";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route index element={<Email />} />
          <Route path="email" element={<Email />} />
          <Route path="alamat" element={<Alamat />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="posts" element={<Posts />}>
          <Route path=":postId" element={<DetailsPosts />} />
        </Route>
      </Routes>
    </div>
  );
}
