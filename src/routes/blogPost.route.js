const route = require('express').Router();
const { BlogPostController } = require('../controller');
const { validateJWT } = require('../middleware/auth/validateJwt');

route.post('/', validateJWT, BlogPostController.createBlogPost);

module.exports = route;