// src/auth/validateJWT.js
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateJwtToken = (payload) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '1d',
  });
  return token;
};

const decodedToken = (token) => jwt.verify(token, secret) || null;

const validateJWT = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const token = authorization.split(' ')[1];
  
  try {
    const decoded = decodedToken(token);
    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.userId = decoded.data.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
  generateJwtToken,
};  