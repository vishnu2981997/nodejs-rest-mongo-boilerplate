const createError = require("http-errors");

module.exports.responseHelpers = ({ config }) => {
  const instance = {};

  const logIt = async (req, data, type = "info") => {
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
      stack: "",
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
    const response = {
      code: data.code || data.statusCode || 500,
      data: "",
      stack: "",
    };

    if (typeof data === "string") {
      response.data = data;
    } else if (data.message) {
      response.data = data.message;
    }

    if (config.logging.error) {
      logIt(req, response, "error");
    }

    if (sendResponse) {
      return res.status(response.code).json(response);
    }
  };

  instance.errorHandler = (err, req, res, next) => {
    const response = {
      code: err.code || err.statusCode || 500,
      message: "",
      stack: "",
    };

    if (typeof err === "string") {
      response.message = err;
    } else if (err.message) {
      response.message = err.message;
    }

    if (config.logging.error) {
      logIt(req, response, "error");
    }

    return res.status(response.code).json(response);
  };

  instance.createError = createError;

  return instance;
};
