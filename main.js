const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
// const todoList = require('./Models/data.js')
const MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// const func = require('./Models/data.js')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// var findDocuments = function(db, callback) {
//   // Get the documents collectionx
//   var collection = db.collection('documents');
//   // Find some documents
//   collection.find({'a': 3}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs);
//     callback(docs);
//   });
// }


app.get('/', function(req, res) {
  console.log('line 75');

  var collection = database.collection('todos');
    // Find some documents
    collection.find({}).toArray(function(err, todoList) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(todoList)
        res.render('index', {data:todoList});
    });
});

app.post('/', function (req, res) {
  console.log('in function');
    let newTodo = req.body.todo;
    let newlistObject = {'text':newTodo, 'done':false, 'id':(todoList.length + 1)}
    // to save the todo object to mongo
    // todoList.push(newlistObject);
    let collection = database.collection('todos');
    //to save the todo to the collection//
    //after saving get the list and render//
  res.redirect('/');
})

app.post('/:id', function(req, res) {
  todoList.forEach((todo) => {
  let id = parseInt(req.params.id);
  if(id === todo.id){
    console.log('line92');
    todo.done = true;
     console.log("setting " + todoList.text + " to true");
res.render('index', {data: todoList});
};
})
});



// Connection URL
const url = 'mongodb://localhost:27017/todo';

let database;

app.listen(3000, function() {
  console.log('Successfully started express application!');
})

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb");
  database = db;
});

process.on('SIGINT', function() {
  console.log("\nshutting down");
  database.close(function () {
    console.log('mongodb disconnected on app termination');
    process.exit(0);
  });
});
