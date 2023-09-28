const { User } = require('../models');
const { userSchema } = require('../middleware/schema');
const { generateJwtToken } = require('../middleware/auth/validateJwt');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: 'SUCCESSFUL', data: users };
};

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getByUserId = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };

  return { status: 'SUCCESSFUL', data: user };
};

const createUser = async (displayName, email, password, image) => {
  const { error } = userSchema.validate({ displayName, email, password });
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  const userEmail = await getUser(email);
  if (userEmail) return { status: 'CONFLICT', data: { message: 'User already registered' } };

  const newUser = await User.create({ displayName, email, password, image });

  const token = generateJwtToken({ data: { userId: newUser.id } });

  return { status: 'CREATED', data: { token } };
};

module.exports = {
  getUser,
  getByUserId,
  createUser,
  getAll,
};