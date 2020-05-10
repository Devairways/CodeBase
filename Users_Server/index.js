// Initialize express package
// This file initializes the backend server.
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ obj: 'object' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);