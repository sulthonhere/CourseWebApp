var express = require('express');
var router = express.Router();

/* GET media listing. */
router.get('/', function(req, res, next) {
  res.send('media');
});

module.exports = router;
