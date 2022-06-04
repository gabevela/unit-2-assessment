var express = require('express');
var router = express.Router();

let Todo = require('../models/todo.js')
let todosArray = Todo.todosArray;

/* GET home page. */
router.post('/new', function(req, res, next) {
  console.log('THIS IS THE TODOS.JS ROUTER DOING ITS THING')
  console.log(req.body);
  let obj = { todo: "" , done:false };
  obj.todo = req.body.todo;
  todosArray.push(obj);
  console.log(req.body);
  res.render('index', {todosArray: todosArray} );
});


module.exports = router;