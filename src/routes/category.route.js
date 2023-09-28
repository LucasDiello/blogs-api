const route = require('express').Router();
const { validateJWT } = require('../middleware/auth/validateJwt');
const { CategoryController } = require('../controller');

route.post('/', validateJWT, CategoryController.createCategory);

module.exports = route;