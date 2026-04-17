const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/health', (req, res) => {
  res.json({ message: 'healthy' });
});

app.get('/me', (req, res) => {
  res.json({
    name: 'Godson Tutu',
    email: 'godsontutu275@gmail.com',
    github: 'https://github.com/Godson-7'
  });
});

app.listen(5000, '127.0.0.1', () => {
  console.log('Server running on port 5000');
});
