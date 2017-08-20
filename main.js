const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

let todoList = [{
      'text': "Learn Node basics",
      'done': true,
      'id' : 1
    },
    {
      'text': "Learn Express basics",
      'done': true,
      'id' : 2
    },
    {
      'text': "Learn Mustache",
      'done': true,
      'id' : 3
    },
    {
      'text': "Learn Mustache",
      'done': false,
      'id' : 4
    },
    {
      'text': "Learn HTML forms with Express",
      'done': false,
      'id' : 5
    },
    {
      'text': "Learn about authentication",
      'done': false,
      'id' : 6
    },
    {
      'text': "Learn how to connect to PostgreSQL",
      'done': false,
      'id' : 7
    },
    {
      'text': "Learn how to create databases",
      'done': false,
      'id' : 7
    },
    {
      'text': "Learn SQL",
      'done': false,
      'id' : 8
    },
    {
      'text': "Learn how to connect to PostgreSQL from Node",
      'done': false,
      'id' : 9
    },
    {
      'text': "Learn how to use Sequelize",
      'done': false,
      'id' : 10
    },
  ]

app.get('/', function(req, res) {
  console.log('line 75');
  res.render('index', {data:todoList});
});

app.post('/', function (req, res) {
  console.log('in function');
    const newTodo = req.body.todo;
    let newlistObject = {'text':newTodo, 'done':false, 'id':(todoList.length + 1)}
    todoList.push(newlistObject);
  res.redirect('/');
})

app.post('/:id', function(req, res) {
  let id = parseInt(req.params.id);
todoList.forEach((todo) => {
if(id === todo.id){
  console.log('line92');
  todo.done = true;
   console.log("setting " + todoList.text + " to true");
}
})
res.render('index', {data: todoList});
});

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
