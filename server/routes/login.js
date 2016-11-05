var express = require('express');
var router = express.Router();

var auth = require('../modules/auth');

/** 
 * Standard logging in functionality. 
 * @ return {string} JSON object containing a token.
 */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
