const createError = require("http-errors");

module.exports = function ({ config }) {
  const instance = {};

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

    return res.status(code).json(response);
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

    return res.status(response.code).json(response);
  };

  instance.errorHandler = (err, req, res, next) => {
    return res.status(500).json({ message: err.message });
  };

  instance.createError = createError;

  return instance;
};
