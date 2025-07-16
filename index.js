//simple express server to serve the demo page
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the demo page! Visit http://localhost:3000/demo.html to see the demo.'
  });
});