import React, { useState } from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {};
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
