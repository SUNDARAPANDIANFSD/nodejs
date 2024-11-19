// Import the Express module
const express = require('express');
// Initialize the app
const app = express();
// Define a port
const PORT = 3000;
// Create a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! This is your basic Express server.');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on
        http://localhost:${PORT}`);
});