require('dotenv').config({ path: './config.env' });
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');

const cors = require('cors');
app.use(cors());

connectDB();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.send('Api running');
});

// Connecting Routes
app.use('/user', require('./routes/user'));
app.use('/message', require('./routes/message'));

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
