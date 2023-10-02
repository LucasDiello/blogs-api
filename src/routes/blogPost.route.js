const route = require('express').Router();
const { BlogPostController } = require('../controller');
const { validateJWT } = require('../middleware/auth/validateJwt');

route.get('/search', validateJWT, BlogPostController.getAll);
route.post('/', validateJWT, BlogPostController.createBlogPost);
route.get('/', validateJWT, BlogPostController.getAll);
route.get('/:id', validateJWT, BlogPostController.getByPostId);
route.put('/:id', validateJWT, BlogPostController.updatePost);
route.delete('/:id', validateJWT, BlogPostController.deletePost);

module.exports = route;