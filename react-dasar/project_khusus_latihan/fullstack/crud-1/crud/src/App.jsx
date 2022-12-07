import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarUtama from "./assets/components/NavbarUtama";
import { Routes, Route } from "react-router-dom";
import UsersList from "./assets/components/UsersList";
import CreateUser from "./assets/components/CreateUser";
import Container from "react-bootstrap/Container";
import EditUser from "./assets/components/EditUser";

const App = () => {
  return (
    <div>
      <NavbarUtama />
      <Container style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create/user" element={<CreateUser />} />
          <Route path="/edit/user/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<EditUser />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
