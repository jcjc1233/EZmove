// Import necessary libraries
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for home page
app.get('/', (req, res) => {
  res.send('Welcome to the EZMove App!');
});

// Routes for Customers
app.post('/request-move', (req, res) => {
  // Logic to handle move request
  res.status(201).send('Move requested');
});

// Routes for Movers
app.get('/available-moves', (req, res) => {
  // Logic to list available moves
  res.status(200).json({ moves: [] });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
