import React, { useState } from "react";

const ListItem = ({ todo, id, deleteTodo, updateTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState({ todo: todo });

  const onSubmit = (e) => {
    e.preventDefault();

    updateTodo(id, text);

    setIsEdit(!isEdit);
  };

  const switchButton = (isEdit) => {
    return isEdit === true ? "Simpan" : "Edit";
  };
  return (
    <>
      <li style={{ display: "flex", marginTop: "30px" }}>
        <form onSubmit={onSubmit}>
          {isEdit === true ? (
            <input
              type="text"
              value={text.todo}
              onChange={(e) => setText({ todo: e.target.value })}
            />
          ) : (
            <input disabled type="text" value={text.todo} />
          )}
        </form>

        <div style={{ display: "flex", gap: "5px" }}>
          {/* {isEdit === true ? (
            <>
              <button onClick={onSubmit}>Simpan</button>
              <button onClick={() => setIsEdit(!isEdit)}>Batal</button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEdit(!isEdit)}>edit</button>
              <button onClick={() => deleteTodo(id)}>Hapus</button>
            </>
          )} */}

          <button onClick={() => setIsEdit(!isEdit)}>
            {switchButton(isEdit)}
          </button>
          <button onClick={() => deleteTodo(id)}>Hapus</button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
