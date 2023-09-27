const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i)
    .messages({
      'string.pattern.base': '"email" must be a valid email',
    }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
    
});

module.exports = {
  userSchema,
};