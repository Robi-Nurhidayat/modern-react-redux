import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <p>Todos</p>
      </nav>
      <section>
        <Todolist />
      </section>
    </div>
  );
};

export default App;
