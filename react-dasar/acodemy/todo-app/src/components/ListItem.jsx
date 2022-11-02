import React, { useState } from "react";

function ListItem({ food, id, deleteFood, updateFood }) {
  const [isEdit, setIsEdit] = useState(false);
  const [nama, setNama] = useState({ nama: food });

  const handleSimpan = (e) => {
    e.preventDefault();

    updateFood(id, nama);

    setIsEdit(!isEdit);
  };
  return (
    <>
      <li className="todo-item">
        <form className="form-edit" onSubmit={handleSimpan}>
          {!isEdit ? (
            <input
              disabled
              type="text"
              className="input-no-border"
              value={nama.nama}
            />
          ) : (
            <input
              type="text"
              className="input-with-border"
              value={nama.nama}
              onChange={(e) => setNama({ nama: e.target.value })}
            />
          )}
        </form>
        {!isEdit ? (
          <>
            <button
              className="btn btn__action btn__action-edit"
              onClick={() => setIsEdit(!isEdit)}
            >
              Edit
            </button>
            <button
              className="btn btn__action btn__action-delete"
              onClick={() => {
                deleteFood(id);
              }}
            >
              Hapus
            </button>
          </>
        ) : (
          <>
            <button className="btn btn__action" onClick={handleSimpan}>
              Simpan
            </button>
            <button
              className="btn btn__action btn__action-batal"
              onClick={() => {
                setIsEdit(!isEdit);
              }}
            >
              Batal
            </button>
          </>
        )}
      </li>
    </>
  );
}

export default ListItem;
