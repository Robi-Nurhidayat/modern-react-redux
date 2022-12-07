import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getAllUsers();
  };
  const renderedAllUsers = users.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.gender}</td>
        <td style={{ display: "flex", gap: "5px" }}>
          <Link to={`/edit/user/${user.id}`}>
            <Button variant="primary">Edit</Button>
          </Link>
          <Button variant="danger" onClick={() => deleteUser(user.id)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div>
        <Link to={"/create/user"}>
          <Button variant="primary mb-3">Add New User</Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>{renderedAllUsers}</tbody>
      </Table>
    </div>
  );
};

export default UsersList;
