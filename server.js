const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Serve static files correctly
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.use(bodyParser.json());
app.post('/submit', (req, res) => {
    const { username, password } = req.body;

    // Save data to a text file
    const userData = `Username: ${username}, Password: ${password}\n`;
    fs.appendFileSync('data/user-data.txt', userData);
    res.status(200).send('Data saved successfully');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});