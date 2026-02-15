const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('It works! Hello from server.js');
});

app.listen(8000, () => {
  console.log('Server started on http://localhost:8000');
});
