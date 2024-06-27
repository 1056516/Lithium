// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (e.g., images, CSS)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
