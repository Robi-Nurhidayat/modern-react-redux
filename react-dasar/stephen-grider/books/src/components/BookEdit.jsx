import React, { useState } from "react";

const BookEdit = ({ book, handleSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    handleSubmit(book.id, title);
  };
  return (
    <form onSubmit={handleSubmitEdit} className="book-edit">
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
