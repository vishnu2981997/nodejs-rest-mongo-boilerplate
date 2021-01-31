const authMiddleware = require("./auth.middleware");
const loggingMiddleware = require("./logging.middleware");

module.exports = ({ config, utils, helpers }) => {
  const instance = {};

  instance.authMiddleware = authMiddleware({ config, utils, helpers });
  instance.loggingMiddleware = loggingMiddleware({ config, utils, helpers });

  return instance;
};
