import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Produk from "./components/Produk";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto border mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produk" element={<Produk />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </section>
    </div>
  );
};

export default App;
