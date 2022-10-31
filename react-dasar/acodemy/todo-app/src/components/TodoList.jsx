import React from "react";
import FormAdd from "./FormAdd";

function TodoList() {
  return (
    <>
      <FormAdd />
      <ul>
        <li className="todo-item">
          <form className="form-edit">
            <input
              disabled
              type="text"
              className="input-no-border"
              value={"Makan"}
            />
          </form>
          <button className="btn btn__action btn__action-edit">Edit</button>
          <button className="btn btn__action btn__action-delete">Hapus</button>
        </li>
        <li className="todo-item">
          <form className="form-edit">
            <input
              disabled
              type="text"
              className="input-with-border"
              value={"Makan"}
            />
          </form>
          <button className="btn btn__action btn__action-edit">Edit</button>
          <button className="btn btn__action btn__action-delete">Hapus</button>
        </li>
      </ul>
    </>
  );
}

export default TodoList;
