var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/entries', function(req, res) {
  var nameInput = req.body.nameInput;
  var placeOfOrigin = req.body.placeOfOrigin;
  var editedText = req.body.editedText;

  var entry = new models.Entry({
    "name": nameInput,
    "city": placeOfOrigin,
    "body": editedText
  });

  entry.save();
  
});


module.exports = router;

  
