var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: true}));
/* GET users listing. */
router.post('', function(req, res, next) {
  res.send('respond with a resource');
  let firstName = req.body.firstName,
      lastName = req.body.lastName;
  console.log(`First Name: ${firstName}\nLast Name: ${lastName}`);
  res.end();
});

module.exports = router;
