const { PostCategory, BlogPost } = require('../models');
const { postSchema } = require('../middleware/schema');
const { verifyCategoryExists } = require('../middleware/validationCategory');

const mapCategories = async (categoriesId, postId) => {
  await Promise.all(
    categoriesId.map(async (categoryId) => {
      await PostCategory.create({ postId, categoryId });
    }),
  );
};

const createPost = async (title, content, categoryIds, userId) => {
  const verifyCategory = await verifyCategoryExists(categoryIds);
  if (!verifyCategory) {
    return { status: 'BAD_REQUEST', data: { message: 'one or more "categoryIds" not found' } };
  }
  const { error } = postSchema.validate({ title, content, userId, categoryIds });
  if (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }  
  const post = await BlogPost.create(
    {
      title,
      content,
      userId,
    },
  );

  await mapCategories(categoryIds, post.id);

  return { status: 'CREATED', data: post };
};

module.exports = {
  createPost,
};