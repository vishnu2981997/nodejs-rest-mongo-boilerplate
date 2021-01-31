const infoServices = require("./info.services");
const authServices = require("./auth.services");
const userServices = require("./user.services");

module.exports = ({ config, models, utils, helpers }) => {
  const instance = {};

  instance.infoServices = infoServices({ config, models, utils, helpers });
  instance.authServices = authServices({ config, models, utils, helpers });
  instance.userServices = userServices({ config, models, utils, helpers });

  return instance;
};
