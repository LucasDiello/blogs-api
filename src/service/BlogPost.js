const { PostCategory, User, Category, BlogPost } = require('../models');
const { postSchema, updatePostSchema } = require('../middleware/schema');
const { verifyCategoryExists } = require('../middleware/validationCategory');

const mapCategories = async (categoriesId, postId) => {
  await Promise.all(
    categoriesId.map(async (categoryId) => {
      await PostCategory.create({ postId, categoryId });
    }),
  );
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 'SUCCESSFUL', data: posts };
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

const getByPostId = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) { return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } }; }

  return { status: 'SUCCESSFUL', data: post };
};

const updatePost = async (id, title, content, userId) => {
  const { error } = updatePostSchema.validate({ title, content });
  if (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }

  await BlogPost.update(
    {
      title,
      content,
    },
    { where: { id } },
  );
    
  const { data: updatedPost } = await getByPostId(id);
  if (updatedPost.user.id !== userId) {
    return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  }

  return { status: 'SUCCESSFUL', data: updatedPost };
};

module.exports = {
  createPost,
  getAll,
  getByPostId,
  updatePost,
};