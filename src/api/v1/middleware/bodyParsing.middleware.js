const Ajv = require("ajv").default;

module.exports = ({ config, utils, helpers }) => {
  const instance = {};

  const { cryptoHelpers, responseHelpers } = helpers;

  const { createError } = responseHelpers;

  const { jwtVerify } = cryptoHelpers;

  instance.validateBody = (schema) => (req, res, next) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
      const errorMessage = validate.errors
        .map((details) => `${details.dataPath} ${details.message}`)
        .join(", ");
      throw createError(422, errorMessage);
    }
    next();
  };

  return instance;
};
