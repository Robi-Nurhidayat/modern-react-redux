import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();

    setEmail("");
    setFullName("");
    setGender("");
  };

  const createUser = async () => {
    if (fullName && email && gender) {
      await axios.post("http://localhost:5000/users", {
        name: fullName,
        email,
        gender,
      });
      navigate("/");
    }
  };
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
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Select Your Gender</option>
            <option value="Male">Male</option>
            <option value="Pemale">Pemale</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary mt-3" type="submit">
          Create
        </Button>
      </Form>
    </>
  );
};

export default EditUser;
