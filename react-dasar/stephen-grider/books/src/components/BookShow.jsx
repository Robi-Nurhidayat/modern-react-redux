import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBookById, updateBookById }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    updateBookById(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} handleSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img alt="book" src="https://picsum.photos/300/200" />
      <div>{content}</div>

      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
