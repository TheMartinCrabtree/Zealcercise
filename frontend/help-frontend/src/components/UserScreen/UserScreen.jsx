import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const UserScreen = (props) => {
  const [formData, setFormData] = useState({
    userID: undefined,
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFirstName">
        <Form.Label>First Name </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <div>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe your problem"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserScreen;
