import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button" type="submit">
          Create!
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
