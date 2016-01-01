var express = require('express');
var router = express.Router();
var quiz= require('../data/quiz_data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/fulldata',function(req,res,next){
    res.json(quiz);

})
module.exports = router;
