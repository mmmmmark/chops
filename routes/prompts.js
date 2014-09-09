var express = require('express');
var router = express.Router();
var models = require("../models");

router.get('/', function(req, res) {
	models.Prompt.find(function(err, prompts) {
		res.render('prompts', { prompts: prompts });
	});
});

module.exports = router;