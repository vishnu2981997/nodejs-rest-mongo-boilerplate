const { v4: uuid } = require("uuid");

module.exports = ({ config, helpers }) => {
  const instance = {};

  const { responseHelpers } = helpers;

  const { createError } = responseHelpers;

  instance.generateUUID = (req, res, next) => {
    req.uuid = uuid();
    next();
  };

  return instance;
};
