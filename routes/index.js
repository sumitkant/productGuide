var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'StrawberryPOS' });
});

/* GET for individual pages */
router.get('/', function(req, res, next) {
  res.render('videoContainer', { 
  		heading: 'StrawberryPOS',
  		videourl: ''
	});
});

module.exports = router;
