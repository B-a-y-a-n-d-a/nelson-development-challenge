const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  const { data } = req.body;
  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing "data" field' });
  }
  const sortedArray = data.split('').sort();
  return res.json({ word: sortedArray });
});

module.exports = app;
