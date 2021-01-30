const authMiddleware = require("./auth.middleware");

module.exports = ({ config, helpers }) => {
  const instance = {};

  instance.authMiddleware = authMiddleware({ config, helpers });

  return instance;
};
