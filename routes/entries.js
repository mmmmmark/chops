var express = require('express');
var router = express.Router();
var models = require("../models");

router.get('/', function(req, res) {
	models.Entry.find(function(err, documents) {
		res.render('entries', { docs: documents });
	});
});

module.exports = router;