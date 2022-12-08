import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
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
    const deleteBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deleteBook);
    // fetchBooks();
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

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    deleteBookById,
    updateBookById,
  };
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
