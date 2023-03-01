import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartsLists from "./assets/app/carts/CartsLists";
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
        <Route path="/carts" element={<CartsLists />} />
      </Routes>
    </div>
  );
};

export default App;
