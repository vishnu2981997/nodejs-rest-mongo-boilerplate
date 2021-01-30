const infoServices = require("./info.services");
const authServices = require("./auth.services");
const userServices = require("./user.services");

module.exports = function ({ config, models, helpers }) {
  const instance = {};

  instance.infoServices = infoServices({ config, models, helpers });
  instance.authServices = authServices({ config, models, helpers });
  instance.userServices = userServices({ config, models, helpers });

  return instance;
};
