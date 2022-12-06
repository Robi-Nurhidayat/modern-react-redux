import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarUtama from "./assets/components/NavbarUtama";
import { Routes, Route } from "react-router-dom";
import UsersList from "./assets/components/UsersList";
import CreateUser from "./assets/components/CreateUser";
import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <div>
      <NavbarUtama />
      <Container style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/create/user" element={<CreateUser />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
