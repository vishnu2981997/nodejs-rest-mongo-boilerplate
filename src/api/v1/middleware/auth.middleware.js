module.exports = ({ config, utils, helpers }) => {
  const instance = {};

  const { cryptoHelpers, responseHelpers } = helpers;

  const { createError } = responseHelpers;

  const { jwtVerify } = cryptoHelpers;

  instance.verifyAccessToken = (req, res, next) => {
    if (req.get("Authorization")) {
      const token = req.get("Authorization").split(" ")[1];
      let decodeToken;
      try {
        decodeToken = jwtVerify(token);
      } catch (err) {
        err.statusCode = 500;
        throw err;
      }

      if (!decodeToken) {
        throw createError(401, "not authorized");
      }

      req.userId = decodeToken.userId;
    } else {
      throw createError(401, "not authorized");
    }
    next();
  };

  return instance;
};
