const CategoryService = require('../service/Category');

const verifyCategoryExists = async (categoryId) => {
  const { data } = await CategoryService.getAll();
  const existCategory = data.map((category) => categoryId.some((id) => id === category.id))
    .filter((valid) => valid === true);
  const verify = !existCategory.includes(false) && existCategory.length === categoryId.length;
  return verify;
}; 

module.exports = {
  verifyCategoryExists,
};