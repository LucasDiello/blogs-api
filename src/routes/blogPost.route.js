const route = require('express').Router();
const { BlogPostController } = require('../controller');
const { validateJWT } = require('../middleware/auth/validateJwt');

route.post('/', validateJWT, BlogPostController.createBlogPost);
route.get('/', validateJWT, BlogPostController.getAll);
route.get('/:id', validateJWT, BlogPostController.getByPostId);
route.put('/:id', validateJWT, BlogPostController.updatePost);

module.exports = route;