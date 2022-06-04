var express = require('express');
var router = express.Router();

let Todo = require('../models/todo.js')
let todosArray = Todo.todosArray;

/* GET home page. */

router.get('/', function(req, res, next) {
  console.log('this is the "post" doing its thing')
  res.render('index', {todosArray: todosArray} );
});


router.get('/', function(req, res, next) {
  console.log('clicking the "add todo list" button')
  res.render('index');
});


module.exports = router;

