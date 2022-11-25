import React, { useState } from "react";
import { useAddTodosMutation } from "../app/features/apiSlice";

const FormAdd = () => {
  const [addTodos] = useAddTodosMutation();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodos({
      id: Math.random() * 5 + 100,
      title: title,
      completed: false,
    });

    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          className="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default FormAdd;
