const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config()

app.use(express.json());

const posts = [
  {
    username: 'El Jefe',
    title: 'post 1',
  },
  {
    username: 'Jane Doe',
    title: 'post 2',
  },
];

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/login', (req, res) => {
  // auth user

  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

app.listen(3000);
