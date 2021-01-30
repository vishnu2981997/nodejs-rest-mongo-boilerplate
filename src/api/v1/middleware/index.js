const authMiddleware = require("./auth.middleware");

module.exports = function ({ config, helpers }) {
  const instance = {};

  instance.authMiddleware = authMiddleware({ config, helpers });

  return instance;
};
