var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fellow User', downloadUrl: 'http://' + appDomain + '/downloads'});
});

router.get('/downloads', function(req, res, next) {
    res.render('downloads', { title: 'Downloads'});
});

module.exports = router;
