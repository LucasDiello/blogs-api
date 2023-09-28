const route = require('express').Router();
const { validateJWT } = require('../middleware/auth/validateJwt');
const { CategoryController } = require('../controller');

route.post('/', validateJWT, CategoryController.createCategory);
route.get('/', validateJWT, CategoryController.getAll);
module.exports = route;