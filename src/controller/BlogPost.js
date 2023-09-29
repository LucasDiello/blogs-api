const { BlogPostService } = require('../service');
const { mapStatusHTTP } = require('../util/mapStatusHTTP');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req;
  
  const { status, data } = await BlogPostService.createPost(title, content, categoryIds, userId);
  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await BlogPostService.getAll();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createBlogPost,
  getAll,
};
