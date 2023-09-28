const { Category } = require('../models');
const { categorySchema } = require('../middleware/schema');

const createCategory = async (name) => {
  const { error } = categorySchema.validate({ name });
  if (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
  const category = await Category.create({ name });
  return { status: 'CREATED', data: category };
};

module.exports = {
  createCategory,
};
