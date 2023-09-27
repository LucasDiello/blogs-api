const { User } = require('../models');

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getByUserId = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

module.exports = {
  getUser,
  getByUserId,
};