import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./assets/app/products/ProductList";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default App;
