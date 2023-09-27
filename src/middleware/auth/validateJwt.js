// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

const { UserService } = require('../../service');

const secret = process.env.JWT_SECRET;

const generateJwtToken = (payload) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '1d',
  });
  return token;
};

const decodedToken = (token) => jwt.verify(token, secret);

const validateJWT = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }
  
  const token = authorization.split(' ')[1];
  
  try {
    const decoded = decodedToken(token);
    const user = await UserService.getByUserId(decoded.data.userId);
    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }
  
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = {
  validateJWT,
  generateJwtToken,
};  