const { v4: uuid } = require("uuid");

module.exports = ({ config, utils, helpers }) => {
  const instance = {};

  const { responseHelpers } = helpers;

  const { logging } = utils;

  const { createError } = responseHelpers;

  instance.generateUUID = (req, res, next) => {
    req.uuid = uuid();

    next();
  };

  instance.getUserAgent = (req, res, next) => {
    req.userAgent = req.get("User-Agent") ? req.get("User-Agent") : undefined;

    next();
  };

  instance.getIpAddress = (req, res, next) => {
    try {
      req.ipAddress = req.connection.remoteAddress;
    } catch (err) {
      req.ipAddress = undefined;
    }

    next();
  };

  instance.getServiceName = (req, res, next) => {
    req.service = req.service ? req.service.toString() : undefined;

    next();
  };

  instance.getUserName = (req, res, next) => {
    req.username = req.get("username") ? req.get("username") : undefined;

    next();
  };

  instance.initializeLogger = (req, res, next) => {
    if (!req.log) {
      req.log = logging.logger(req);
    }

    next();
  };

  return instance;
};
