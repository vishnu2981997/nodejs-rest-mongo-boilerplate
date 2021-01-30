const userModals = require("./user.models");

module.exports = ({ config, mongoose }) => {
  const instance = {};

  instance.userModals = userModals({ config, mongoose });

  return instance;
};
