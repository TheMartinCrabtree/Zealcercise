import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";

const userData = [
  {
    userID: "101",
    firstName: "Joe",
    lastName: "Schmoe",
    email: "joe.schmoe@gmail.com",
    ticketID: "101001",
    issueText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ticketStatus: "new",
  },
  {
    userID: "102",
    firstName: "Adam",
    lastName: "Smasher",
    email: "asmash@aol.com",
    ticketID: "102001",
    issueText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ticketStatus: "resolved",
  },
  {
    userID: "103",
    firstName: "Ursula",
    lastName: "Le Guin",
    email: "leguin@yahoo.com",
    ticketID: "103001",
    issueText:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ticketStatus: "in progress",
  },
];

const AdminScreen = () => {
  return (
    <Container>
      <Accordion className="mt-3" defaultActiveKey="0">
        {userData &&
          userData.map((user, index) => {
            const {
              ticketID,
              ticketStatus,
              firstName,
              lastName,
              email,
              issueText,
            } = user;
            return (
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>
                  Ticket ID: {ticketID} Status: {ticketStatus}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    {firstName} {lastName}
                  </div>
                  <div>Email: {email}</div>
                  <div>Description: {issueText}</div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </Container>
  );
};

export default AdminScreen;
