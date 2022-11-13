import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar/Navbar";
import Feed from "./assets/components/Feed";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
