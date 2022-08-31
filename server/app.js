require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const errorHandler = require('./middlewares/errorHandler');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConnection');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes');

const PORT = process.env.PORT || 4000;

// create express app
const app = express();

// middlewares
app.use(express.json());

app.use(cookieParser());

app.use(cors(corsOptions));

// routes
app.use('/auth', authRoutes);

app.use('/users', userRoutes);

app.use('/notes', noteRoutes);

// handle not existing routes
app.all('*', (req, res) => {
  res.status(400).json({ messasge: '404 Not Found' });
});

// handle errors
app.use(errorHandler);

//connecting to the database
connectDB();
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});
