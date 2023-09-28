const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_CONTENT: 204,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  UNPROCESSABLE_ENTITY: 422,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = { mapStatusHTTP };
