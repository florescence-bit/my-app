const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/try', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'try.html'));
});

app.get('/close', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'close.html'));
  // Optional: Shut down server
  // server.close(() => console.log("Server closed"));
});

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
