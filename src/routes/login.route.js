const router = require('express').Router();

const { LoginController } = require('../controller');

router.post('/', LoginController.login);

module.exports = router;