const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
  // only return posts that are the user's
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // splitting at the space in "Bearer (TOKEN)"
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user
    next()
  });
}

app.listen(3000);
