const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello from Node.js! new <a herf="/home">home</a>');
});
app.get('/home', (req, res) => {
    res.send('u are at home 💩');
 });
// Start server
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
