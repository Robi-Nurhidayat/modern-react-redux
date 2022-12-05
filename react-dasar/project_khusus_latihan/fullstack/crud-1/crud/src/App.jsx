import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarUtama from "./assets/components/NavbarUtama";
import { Routes, Route } from "react-router-dom";
import UsersList from "./assets/components/UsersList";

const App = () => {
  return (
    <div>
      <NavbarUtama />
      <Routes>
        <Route path="/" element={<UsersList />} />
      </Routes>
    </div>
  );
};

export default App;
