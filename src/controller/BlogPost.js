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

const getByPostId = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await BlogPostService.getByPostId(id);
  res.status(mapStatusHTTP(status)).json(data);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;
  const { title, content } = req.body;
  const { status, data } = await BlogPostService.updatePost(id, title, content, userId);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createBlogPost,
  getAll,
  getByPostId,
  updatePost,
};
