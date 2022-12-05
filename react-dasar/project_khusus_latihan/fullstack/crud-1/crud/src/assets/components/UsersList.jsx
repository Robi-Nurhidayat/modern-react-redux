import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const renderedAllUsers = users.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
      </tr>
    );
  });
  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>{renderedAllUsers}</tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UsersList;
