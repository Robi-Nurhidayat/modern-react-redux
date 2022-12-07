import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:4001/books");

    setBooks(data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:4001/books", {
      title: title,
    });
    const addBooks = [...books, response.data];

    setBooks(addBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:4001/books/${id}`);
    // const deleteBook = books.filter((book) => {
    //   return book.id !== id;
    // });

    // setBooks(deleteBook);
    fetchBooks();
  };

  const updateBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:4001/books/${id}`, {
      title: newTitle,
    });

    const updateBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
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
