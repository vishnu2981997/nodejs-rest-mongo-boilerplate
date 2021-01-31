const infoControllers = require("./info.controllers");
const authControllers = require("./auth.controllers");
const userControllers = require("./user.controllers");

module.exports = ({ config, services, utils, helpers }) => {
  const instance = {};

  instance.infoControllers = infoControllers({
    config,
    services,
    utils,
    helpers,
  });
  instance.authControllers = authControllers({
    config,
    services,
    utils,
    helpers,
  });
  instance.userControllers = userControllers({
    config,
    services,
    utils,
    helpers,
  });

  return instance;
};
