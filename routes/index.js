var express = require('express');
var router = express.Router();

let UserRepository = require('../repositories/User.repository');
let User = new UserRepository();


/* GET home page. */
router.get('/', async function(req, res, next) {
  let users = await User.findAll();

  res.render('index', {'users': users, title: 'Express' });
});

module.exports = router;
