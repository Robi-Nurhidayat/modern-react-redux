import React, { useState } from "react";
import {
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} from "../app/features/apiSlice";

const Todoitem = ({ todo }) => {
  const [deleteTodos] = useDeleteTodosMutation();
  const [updateTodos] = useUpdateTodosMutation();
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleComplete = () => {
    setIsCompleted(!todo.completed);
    updateTodos({ ...todo, completed: !todo.completed });
  };
  return (
    <li>
      <div style={{ textDecoration: isCompleted && "line-through" }}>
        <input
          type={"checkbox"}
          className="checkbox"
          checked={isCompleted}
          onChange={handleComplete}
        />
        {todo.title}
      </div>
      <button className="delete" onClick={() => deleteTodos({ id: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default Todoitem;
