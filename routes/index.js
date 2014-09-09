var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// router.get('/chops/:url_name', function(req, res) {
//   var url_name = req.params.url_name;
//   models.Prompt.find({ url_name: url_name }, function(err, prompts) {
//     var foundPrompt = prompts[0];
//     res.render('show', { prompt: foundPrompt })
//   });
// });

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
  res.redirect('/entries')
});

module.exports = router;

  
