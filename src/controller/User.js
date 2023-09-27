const { UserService } = require('../service');
const { mapStatusHTTP } = require('../util/mapStatusHTTP');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const { status, data } = await UserService.createUser(displayName, email, password, image);
    
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (err) {
    return res.status(mapStatusHTTP(422)).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUser,
};
