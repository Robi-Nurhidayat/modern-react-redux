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

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit
        book={book}
        updateBookById={updateBookById}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
      />
    );
  }
  return (
    <div className="book-show">
      {content}

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
