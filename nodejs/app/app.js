// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const port = 3000; // You can use any available port you prefer
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
