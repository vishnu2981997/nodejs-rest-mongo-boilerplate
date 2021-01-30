module.exports = function ({ config, models, helpers }) {
  const instance = {};

  const { requestHelpers } = helpers;

  instance.infoService = async (req) => {
    const result = {};

    try {
      result.data = requestHelpers.getIpAddress(req);
    } catch (err) {
      result.error = err;
    }

    return result;
  };

  return instance;
};
