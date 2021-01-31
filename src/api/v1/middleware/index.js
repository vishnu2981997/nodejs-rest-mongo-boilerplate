const authMiddleware = require("./auth.middleware");
const loggingMiddleware = require("./logging.middleware");
const bodyParsingMiddleware = require("./bodyParsing.middleware");

module.exports = ({ config, utils, helpers }) => {
  const instance = {};

  instance.authMiddleware = authMiddleware({ config, utils, helpers });
  instance.loggingMiddleware = loggingMiddleware({ config, utils, helpers });
  instance.bodyParsingMiddleware = bodyParsingMiddleware({
    config,
    utils,
    helpers,
  });

  return instance;
};
