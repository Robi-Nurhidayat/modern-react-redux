import "./App.css";

import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="card">
      <div className="card__heading">
        <h1>Todo</h1>
      </div>

      <div className="card__content">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
