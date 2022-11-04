import React, { useEffect, useState } from "react";
import Form from "./assets/components/Form";
import axios from "axios";
import ListItem from "./assets/components/ListItem";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const getTodosFromServer = async () => {
        const { data } = await axios.get("http://localhost:5000/todos");

        setTodos(data);
      };

      getTodosFromServer().catch(e);
    } catch (e) {
      console.log("error gagal koneksi");
    }
  }, []);

  // Render Todos

  const renderTodos = () => {
    return todos
      .map((todo) => {
        return (
          <ListItem
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        );
      })
      .reverse();
  };

  // Add todo

  const addTodo = (todo) => {
    axios.post("http://localhost:5000/todos", todo);
  };

  // delete todo

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`);
  };

  // update todo
  const updateTodo = (id, todo) => {
    axios.put(`http://localhost:5000/todos/${id}`, todo);
  };
  console.log(todos);
  return (
    <div className="container mx-auto p-10 items-center flex flex-col">
      <h1 className="mb-2.5 text-base font-bold">TODO APP</h1>
      <Form addTodo={addTodo} />
      <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {renderTodos()}
      </ul>
    </div>
  );
}

export default App;
