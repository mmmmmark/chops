var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // res.render('index', {submitted: true}); //index.html that contains create block
});

router.post('/submitted', function(req, res) {
  var models = require('../models/');
 
	var body = req.body.editedText;
	var name = req.body.nameInput;
	var city = req.body.placeOfOrigin;
 
  var entry = new models.Entry({"body":body, "name": name, "city": city});
  entry.save();
});


// //this is looking at our pageSchema and seeing what can be input into it (matching keys)
//   var p = new models.Page({ //Page here refers to index.js (models) line 30's key, which 
//   	"title": title,         //refers to the pageSchema object
//   	"body":body, 
//   	"url_name": url_name
//   });
//   p.save();
//   // res.redirect('/');  this line will take the user back one page (the line under will take the user back to the home page)
//   res.redirect("/");  //will be redirected to home page when submit button is clicked
//   db.emit("postAdded"); //this will say that "postAdded" event happened when submit is clicked
// });

module.exports = router;