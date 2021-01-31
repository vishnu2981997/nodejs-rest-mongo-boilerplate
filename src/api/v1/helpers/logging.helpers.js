module.exports.loggingHelpers = ({ config }) => {
  const instance = {};

  instance.logIt = async (req, data, type = "info") => {
    if (config.logging.console) {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(data));
    }
    if (req.log) {
      req.log[type](data);
    }
  };

  return instance;
};
