import React, { useState } from "react";

const BookEdit = ({ book, updateBookById, setShowEdit, showEdit }) => {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBookById(book.id, title);
    setShowEdit(!showEdit);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} />
      <button type="submit" className="button is-primary">
        Save
      </button>
    </form>
  );
};

export default BookEdit;
