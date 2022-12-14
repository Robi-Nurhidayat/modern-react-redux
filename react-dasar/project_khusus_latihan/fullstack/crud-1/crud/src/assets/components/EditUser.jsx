import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import UsersContext from "../../userContext/users";

const EditUser = () => {
  const { getUserById, updateUser } = useContext(UsersContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(id, fullName, email, gender);
    navigate("/");

    setEmail("");
    setFullName("");
    setGender("");
  };

  useEffect(() => {
    getUserById(id, setFullName, setEmail, setGender);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Select Your Gender</option>
            <option value="Male">Male</option>
            <option value="Pemale">Pemale</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary mt-3" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
};

export default EditUser;
