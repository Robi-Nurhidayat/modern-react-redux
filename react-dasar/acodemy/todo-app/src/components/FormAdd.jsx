import React, { useState } from "react";
import axios from "axios";

function FormAdd({ addFood }) {
  const [initialFoods, setInitialFoods] = useState({ nama: "" });
  const onSubmit = (e) => {
    e.preventDefault();

    if (!initialFoods.nama) return;
    addFood(initialFoods);
    setInitialFoods({ nama: "" });
  };

  return (
    <form onSubmit={onSubmit} className="flex">
      <input
        type="text"
        className="input-add"
        onChange={(e) => setInitialFoods({ nama: e.target.value })}
        value={initialFoods.nama}
      />
      <button type="submit" className="btn btn__add">
        Add
      </button>
    </form>
  );
}

export default FormAdd;
