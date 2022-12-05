import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const addBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];

    setBooks(addBooks);
  };

  const deleteBookById = (id) => {
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deleteBook);
  };
  return (
    <div className="app">
      <BookList books={books} deleteBookById={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
