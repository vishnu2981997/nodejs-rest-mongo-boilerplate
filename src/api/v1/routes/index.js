const infoRoutes = require("./info.routes");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

module.exports = ({ config, router, middlewares, controllers, helpers }) => {
  const api = router();

  api.use(
    "/",
    infoRoutes({ config, router, middlewares, controllers, helpers })
  );
  api.use(
    "/auth",
    authRoutes({ config, router, middlewares, controllers, helpers })
  );
  api.use(
    "/user",
    userRoutes({ config, router, middlewares, controllers, helpers })
  );

  return api;
};
