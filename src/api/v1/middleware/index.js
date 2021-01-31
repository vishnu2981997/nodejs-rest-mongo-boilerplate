const authMiddleware = require("./auth.middleware");
const loggingMiddleware = require("./logging.middleware");

module.exports = ({ config, helpers }) => {
  const instance = {};

  instance.authMiddleware = authMiddleware({ config, helpers });
  instance.loggingMiddleware = loggingMiddleware({ config, helpers });

  return instance;
};
