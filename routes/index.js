var express = require('express');
var router = express.Router();

/* GET request example */
router.get('/', function(req, res, next) {
  try {
    let user_id = req.query.user_id;
    res.send(`Hello there ${user_id}`);
  } catch (e) {
    return next(e);
  }
});

/* POST request example */
router.post('/', function(req, res, next) {
  try {
    let user_id = req.body.user_id;
    let pwd = req.body.pwd;
    if (user_id === 'ADMIN' && pwd === 'password') {
      res.send('Your user_id and password are valid, welcome');
    } else {
      res.send('Sorry you are unauthorized');
    }
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
