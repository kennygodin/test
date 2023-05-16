const express = require('express');
const db = require('./dbConnect');

const app = express();

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get('/posts', (req, res) => {
  const q = 'SELECT * FROM posts';
  db.query(q, (err, data) => {
    if (err) return res.status(400).json(err);
    return res.status(200).json(data);
  });
});

app.listen(8800, () => {
  console.log('Server is running successfully!');
});
