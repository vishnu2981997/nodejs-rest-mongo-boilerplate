const bCrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = function ({ config }) {
  const instance = {};

  instance.bCryptHash = (data) => {
    return bCrypt.hash(data, 12);
  };

  instance.bCryptCompare = (data, hashedData) => {
    return bCrypt.compare(data, hashedData);
  };

  instance.jwtHash = (data, expire) => {
    return jwt.sign(data, "secret", { expiresIn: expire });
  };

  instance.jwtVerify = (data) => {
    return jwt.verify(data, "secret");
  };

  return instance;
};
