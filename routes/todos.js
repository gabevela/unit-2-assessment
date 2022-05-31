//
//this router ended up not being used!!!!!
//
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/new', function(req, res, next) {
  res.send('this is the page to input a new todo');
});

module.exports = router;

