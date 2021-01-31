const createError = require("http-errors");

module.exports.responseHelpers = ({ config }) => {
  const instance = {};

  const logIt = (req, data, type = "info") => {
    const { log } = req;
    if (log) {
      try {
        log[type](data);
      } catch (error) {
        console.log("error while logging", error.message);
      }
    }
  };

  instance.apiResponse = (req, res, data, code = 200, sendResponse = true) => {
    const response = {
      code,
      data: "",
    };

    if (typeof data === "string") {
      response.data = data;
    } else if (data.message) {
      response.data = data.message;
    } else {
      response.data = data;
    }

    if (config.logging.response) {
      logIt(req, response);
    }

    if (sendResponse) {
      return res.status(code).json(response);
    }
  };

  instance.apiError = (req, res, data, sendResponse = true) => {
    const apiError = {
      code: data.code || data.statusCode || 500,
      data: "",
    };

    if (typeof data === "string") {
      apiError.data = data;
    } else if (data.message) {
      apiError.data = data.message;
    }

    if (config.logging.error) {
      logIt(req, apiError, "error");
    }

    if (sendResponse) {
      return res.status(apiError.code).json(apiError);
    }
  };

  instance.errorHandler = (err, req, res, next) => {
    const error = {
      code: err.code || err.statusCode || 500,
      message: "",
    };

    if (typeof err === "string") {
      error.message = err;
    } else if (err.message) {
      error.message = err.message;
    }

    if (config.logging.error) {
      logIt(req, error, "error");
    }

    return res.status(error.code).json(error);
  };

  instance.createError = createError;

  return instance;
};
