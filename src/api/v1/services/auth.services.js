module.exports = ({ config, models, utils, helpers }) => {
  const instance = {};

  const { requestHelpers, cryptoHelpers } = helpers;

  const { bCryptCompare, jwtHash } = cryptoHelpers;

  instance.verifyPassword = async (password, hashedPassword) => {
    const result = {};

    try {
      result.data = await bCryptCompare(password, hashedPassword);
    } catch (err) {
      result.error = err;
    }

    return result;
  };

  instance.generateAccessToken = async (data) => {
    const result = {};

    try {
      result.data = await jwtHash(data, "6h");
    } catch (err) {
      result.error = err;
    }

    return result;
  };

  instance.generateRefreshToken = async (data) => {
    const result = {};

    try {
      result.data = await jwtHash(data, "24h");
    } catch (err) {
      result.error = err;
    }

    return result;
  };

  instance.generateForgotPasswordTokenService = async (req) => {
    const result = {};

    return result;
  };

  return instance;
};
