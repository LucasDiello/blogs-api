const router = require('express').Router();
const { UserController } = require('../controller');

router.post('/', UserController.createUser);

module.exports = router;