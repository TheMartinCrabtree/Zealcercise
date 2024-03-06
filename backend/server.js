const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL database");
});

// Create a new ticket
app.post("/api/tickets", (req, res) => {
  const newTicket = req.body;
  const sql = "INSERT INTO tickets SET ?";
  db.query(sql, newTicket, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        message: "Ticket created successfully",
        ticket: { id: result.insertId, ...newTicket },
      });
    }
  });
});

// Get all tickets
app.get("/api/tickets", (req, res) => {
  const sql = "SELECT * FROM tickets";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(result);
    }
  });
});

// Get a single ticket by ticketID
app.get("/api/tickets/:ticketID", (req, res) => {
  const ticketID = req.params.ticketID;
  const sql = "SELECT * FROM tickets WHERE ticketID = ?";
  db.query(sql, ticketID, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.length === 0) {
      res.status(404).json({ message: "Ticket not found" });
    } else {
      res.json(result[0]);
    }
  });
});

// Update a ticket by ticketID
app.put("/api/tickets/:ticketID", (req, res) => {
  const ticketID = req.params.ticketID;
  const updatedTicket = req.body;
  const sql = "UPDATE tickets SET ? WHERE ticketID = ?";
  db.query(sql, [updatedTicket, ticketID], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Ticket not found" });
    } else {
      res.json({
        message: "Ticket updated successfully",
        ticket: { id: ticketID, ...updatedTicket },
      });
    }
  });
});

// Delete a ticket by ticketID
app.delete("/api/tickets/:ticketID", (req, res) => {
  const ticketID = req.params.ticketID;
  const sql = "DELETE FROM tickets WHERE ticketID = ?";
  db.query(sql, ticketID, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: "Ticket not found" });
    } else {
      res.json({ message: "Ticket deleted successfully", ticketID });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
