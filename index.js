const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// ✅ Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Default route to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST /webhook route
app.post('/webhook', (req, res) => {
  const input = req.body.data;
  if (!input || typeof input !== 'string') {
    return res.status(400).json({ error: 'Invalid input string' });
  }

  const word = input.split('').sort();
  res.json({ word });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
