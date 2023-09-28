const { CategoryService } = require('../service');
const { mapStatusHTTP } = require('../util/mapStatusHTTP');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await CategoryService.createCategory(name);
  res.status(mapStatusHTTP(status)).json(data);
};

const getAll = async (_req, res) => {
  const { status, data } = await CategoryService.getAll();
  res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  createCategory,
  getAll,
};
