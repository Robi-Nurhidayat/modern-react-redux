import axios from "axios";
import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:4001/books", {
      title: title,
    });
    const addBooks = [...books, response.data];

    setBooks(addBooks);
  };

  const deleteBookById = (id) => {
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deleteBook);
  };

  const updateBookById = (id, newTitle) => {
    const updateBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updateBook);
  };
  return (
    <div className="app">
      <h1>Reading Books</h1>
      <BookList
        books={books}
        deleteBookById={deleteBookById}
        updateBookById={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
