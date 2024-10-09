var express = require('express');
const { createCookieToken, logout } = require('../../authentication/controllers');
var router = express.Router();

router.post('/api/jwt', createCookieToken);
router.post('/api/logout', logout);


module.exports = router;
