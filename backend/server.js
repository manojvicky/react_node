import express from 'express';
import bodyParser from 'body-parser';
import initlize from "./mongoose/db";
import TodoModel from "./mongoose/src/Todo/TodoModel";

const port = 27017;
const dbName = 'zovia';

let db = initlize(port, dbName);

// Set up the express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
console.log("connected");
});

app.get('/api/todos', (req, res) => {
    TodoModel.find()
      .then(todos => {
        res.status(200).send({
          success: 'true',
          message: 'todos retrieved successfully',
          todos
        })
      }).catch(error => {
        res.status(401).send({message:"someting went wrong. Please try again"})
      });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});