import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState({ todo: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    addTodo(todo);

    setTodo({ todo: "" });
  };
  return (
    <form onSubmit={onSubmit} className="form__add flex gap-x-2">
      <input
        type="text"
        className="px-2 py-2 border-2 rounded"
        placeholder="ketikan ..."
        onChange={(e) => setTodo({ todo: e.target.value })}
        value={todo.todo}
      />
      <button
        type="submit"
        className="px-5 text-white text-sm rounded bg-neutral-300"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
