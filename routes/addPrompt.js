var express = require('express');
var router = express.Router();
var models = require("../models");

router.get('/', function(req, res) {
	res.render('addPrompt');
});

router.post('/prompts', function(req, res) {
	var title = req.body.titleOfText;
	var source = req.body.textSource;
	var text = req.body.uneditedText;

	var prompt = new models.Prompt ({
		title: title,
		source: source,
		text: text
	});

	prompt.save();

	res.redirect('/prompts');
});

module.exports = router;