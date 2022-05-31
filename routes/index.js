var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('clicking the "add todo list" button')
  res.render('index');
});

router.post('/', function(req, res, next) {
  console.log('this is the "post" doing its thing')
  res.render('index');
});

module.exports = router;


