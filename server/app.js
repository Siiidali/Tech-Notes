require('dotenv').config();
const { application } = require('express');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.all('*', (req, res) => {
  res.status(400).json({ messasge: '404 Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server started listining on port ${PORT}`);
});
