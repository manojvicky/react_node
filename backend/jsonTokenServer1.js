import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db';
const privateKey = 'Yoo'
// Set up the express app
const app = express();
const jwt = require('jsonwebtoken');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// get all todos
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });

app.get('/api/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
app.get('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const arr = db.filter(item => id === item.id);
  if (arr.length > 0) {
    res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos: arr[0]
    })
  } else {
    res.status(404).send({
      success: 'false',
      message: 'todo does not exist',
    })
  }
});
app.post('/api/todos', verifyToken, (req, res) => {
  console.log('==> req', req.body);
  jwt.verify(req.token, privateKey, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      if (!req.body.title) {
        return res.status(400).send({
          success: 'false',
          message: 'title is required'
        });
      } else if (!req.body.description) {
        return res.status(400).send({
          success: 'false',
          message: 'description is required'
        });
      }
      const todo = {
        id: db.length + 1,
        title: req.body.title,
        description: req.body.description
      }
      db.push(todo);
      return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo,
        authData
      })
    }
  });
});

app.post('/api/login', (req, res) => {
  const user = {
    id: 234,
    username: 'manoj'
  }
  jwt.sign({ user }, privateKey, (err, token) => {
    res.status(200).send({ token })
  })
})

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (bearerHeader !== undefined) {
    const splitToken = bearerHeader.split(' ');
    req.token = splitToken[1];
    console.log('splitToken', bearerHeader)
  } else {
    res.sendStatus(403);
    next();
  }
}
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});