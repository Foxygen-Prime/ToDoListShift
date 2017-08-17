const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Listening on root

// TODO write your code here

let todoList = {
  title: 'Todo',
  items: [{
      'text': "Learn Node basics",
      'done': true
    },
    {
      'text': "Learn Express basics",
      'done': true
    },
    {
      'text': "Learn Mustache",
      'done': true
    },
    {
      'text': "Learn Mustache",
      'done': false
    },
    {
      'text': "Learn HTML forms with Express",
      'done': false
    },
    {
      'text': "Learn about authentication",
      'done': false
    },
    {
      'text': "Learn how to connect to PostgreSQL",
      'done': false
    },
    {
      'text': "Learn how to create databases",
      'done': false
    },
    {
      'text': "Learn SQL",
      'done': false
    },
    {
      'text': "Learn how to connect to PostgreSQL from Node",
      'done': false
    },
    {
      'text': "Learn how to use Sequelize",
      'done': false
    },
  ]
}

app.get('/', function(req, res) {
  res.render('index.mustache', todoList);
})

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
