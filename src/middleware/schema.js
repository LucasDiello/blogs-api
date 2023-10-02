const Joi = require('joi');

const anyRequired = {
  anyRequire: 'Some required fields are missing',
};

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

const categorySchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': '"name" is required',
  }),
});

const postSchema = Joi.object({
  title: Joi.string().min(1).required().messages({
    'any.required': anyRequired.anyRequire,
    'string.min': anyRequired.anyRequire,
    'string.empty': anyRequired.anyRequire,
  }),
  content: Joi.string().min(3).required().messages({
    'any.required': anyRequired.anyRequire,
  }),
  userId: Joi.number().required().messages({
    'any.required': anyRequired.anyRequire,
  }),
  categoryIds: Joi.array().min(2).required().messages({
    'any.required': anyRequired.anyRequire,
    'array.min': '"one or more "categoryIds" not found"',
  }),
});

const updatePostSchema = Joi.object({
  title: Joi.string().min(1).required().messages({
    'any.required': anyRequired.anyRequire,
    'string.min': anyRequired.anyRequire,
    'string.empty': anyRequired.anyRequire,
  }),
  content: Joi.string().min(3).required().messages({
    'any.required': anyRequired.anyRequire,
  }),
});

module.exports = {
  userSchema,
  postSchema,
  categorySchema,
  updatePostSchema,
};