const { CategoryService } = require('../service');
const { mapStatusHTTP } = require('../util/mapStatusHTTP');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await CategoryService.createCategory(name);
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategory,
};
