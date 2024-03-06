import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";

const userData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const AdminScreen = () => {
  const [activeUser, setActiveUser] = useState(null);

  const handleUserClick = (userId) => {
    setActiveUser(userId === activeUser ? null : userId);
  };

  return (
    <Container>
      <Accordion className="mt-3" defaultActiveKey="0">
        {userData &&
          userData.map((user, index) => {
            return (
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{user.name}</Accordion.Header>
                <Accordion.Body>
                  <div>Email: {user.email}</div>
                  <div>Description: {user.description}</div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </Container>
  );
};

export default AdminScreen;
