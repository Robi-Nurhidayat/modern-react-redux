import React, { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBookById, updateBookById }) => {
  const { count, increment } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        deleteBookById={deleteBookById}
        updateBookById={updateBookById}
      />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={increment}>Click</button>
      {renderedBooks}
    </div>
  );
};

export default BookList;
