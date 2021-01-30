module.exports.requestHelpers = ({ config }) => {
  const instance = {};

  instance.getIpAddress = (req) => {
    return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  };

  return instance;
};
