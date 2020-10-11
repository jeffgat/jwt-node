const express = require('express')
const app = express()

const posts =[
  {
    username: 'El Jefe',
    title: 'post 1'
  },
  {
    username: 'Jane Doe',
    title: 'post 2'
  },
]

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.get('./login', (req, res) => {
  
})

app.listen(3000)