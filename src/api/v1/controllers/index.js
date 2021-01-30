const infoControllers = require("./info.controllers");
const authControllers = require("./auth.controllers");
const userControllers = require("./user.controllers");

module.exports = function ({ config, services, helpers }) {
  const instance = {};

  instance.infoControllers = infoControllers({ config, services, helpers });
  instance.authControllers = authControllers({ config, services, helpers });
  instance.userControllers = userControllers({ config, services, helpers });

  return instance;
};
