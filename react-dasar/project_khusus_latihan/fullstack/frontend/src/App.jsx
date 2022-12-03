import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </div>
  );
};

export default App;
