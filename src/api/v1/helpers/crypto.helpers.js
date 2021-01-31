const bCrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.cryptoHelpers = ({ config }) => {
  const instance = {};

  instance.bCryptHash = (data) => {
    return bCrypt.hash(data, config.crypto.bCrypt.salt);
  };

  instance.bCryptCompare = (data, hashedData) => {
    return bCrypt.compare(data, hashedData);
  };

  instance.jwtHash = (data, expire) => {
    return jwt.sign(data, config.crypto.jwt.secret, { expiresIn: expire });
  };

  instance.jwtVerify = (data) => {
    return jwt.verify(data, config.crypto.jwt.secret);
  };

  return instance;
};
