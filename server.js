const express = require('express');
const dotenv = require('dotenv');

const app = express();

// Configure Environment variables
dotenv.config();

// Connect to MongoDB
require('./db/mongoose');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!`);
});
