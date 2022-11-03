import React from "react";

const Form = () => {
  return (
    <form className="form__add flex gap-x-2">
      <input
        type="text"
        className="px-2 py-2 border-2 rounded"
        placeholder="ketikan ..."
      />
      <button className="px-5 text-white text-sm rounded bg-neutral-300">
        Add
      </button>
    </form>
  );
};

export default Form;
