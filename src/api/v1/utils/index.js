const loggingUtils = require("./logging.utils");

module.exports = ({ config }) => {
  const instance = {};

  instance.logging = loggingUtils({ config });

  return instance;
};
