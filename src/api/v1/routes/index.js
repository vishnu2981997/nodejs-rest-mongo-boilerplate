const infoRoutes = require("./info.routes");
const authRoutes = require("./auth.routes");

module.exports = function ({ config, router, controllers, helpers }) {
  const api = router();

  api.use("/", infoRoutes({ config, router, controllers, helpers }));
  api.use("/auth", authRoutes({ config, router, controllers, helpers }));

  return api;
};
