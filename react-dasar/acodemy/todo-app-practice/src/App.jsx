import React, { useEffect, useState } from "react";
import Form from "./assets/components/Form";
import axios from "axios";
import ListItem from "./assets/components/ListItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodosFromServer = async () => {
      const { data } = await axios.get("http://localhost:5000/todos");

      setTodos(data);
    };

    getTodosFromServer();
  }, []);

  // Render Todos

  const renderTodos = () => {
    return todos.map((todo) => {
      return <ListItem todo={todo.todo} key={todo.id} id={todo.id} />;
    });
  };

  console.log(todos);
  return (
    <div className="container mx-auto p-10 items-center flex flex-col">
      <h1 className="mb-2.5 text-base font-bold">TODO APP</h1>
      <Form />
      <ul>{renderTodos()}</ul>
    </div>
  );
}

export default App;
