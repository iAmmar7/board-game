const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

// Configure Environment variables
dotenv.config();

// Load Routes
const gameRoutes = require('./routes/game');

// Connect to MongoDB
require('./db/mongoose');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use('/api', gameRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!`);
});
