const infoRoutes = require("./info.routes");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

module.exports = ({
  config,
  router,
  middlewares,
  validations,
  controllers,
  helpers,
}) => {
  const api = router();

  api.use(
    "/",
    infoRoutes({
      config,
      router,
      middlewares,
      validations,
      controllers,
      helpers,
    })
  );
  api.use(
    "/auth",
    authRoutes({
      config,
      router,
      middlewares,
      validations,
      controllers,
      helpers,
    })
  );
  api.use(
    "/user",
    userRoutes({
      config,
      router,
      middlewares,
      validations,
      controllers,
      helpers,
    })
  );

  return api;
};
