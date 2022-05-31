var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('clicking the "add todo list" button')


  res.render('index');
});

module.exports = router;


