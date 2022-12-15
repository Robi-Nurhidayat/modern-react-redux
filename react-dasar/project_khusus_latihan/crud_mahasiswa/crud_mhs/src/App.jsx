import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";

import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
      <Sidebar />
      <section>
        <Content />
      </section>
    </div>
  );
};

export default App;
