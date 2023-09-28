const { UserService } = require('../service');
const { mapStatusHTTP } = require('../util/mapStatusHTTP');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const { status, data } = await UserService.createUser(displayName, email, password, image);
    
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (err) {
    return res.status(mapStatusHTTP('UNPROCESSABLE_ENTITY')).json({ message: 'Algo deu errado' });
  }
};

const getAll = async (req, res) => {
  try {
    const { status, data } = await UserService.getAll();
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (err) {
    return res.status(mapStatusHTTP('INTERNAL_SERVER_ERROR')).json({ message: 'Algo deu errado' });
  }
};

const getByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, data } = await UserService.getByUserId(id);
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (err) {
    return res.status('INTERNAL_SERVER_ERROR').json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUser,
  getAll,
  getByUserId,
};
