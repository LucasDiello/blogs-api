const router = require('express').Router();
const { UserController } = require('../controller');
const { validateJWT } = require('../middleware/auth/validateJwt');

router.post('/', UserController.createUser);
router.get('/', validateJWT, UserController.getAll);
router.get('/:id', validateJWT, UserController.getByUserId);
router.delete('/me', validateJWT, UserController.deleteUser);
module.exports = router;