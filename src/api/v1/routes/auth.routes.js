module.exports = ({
  config,
  router,
  middlewares,
  validations,
  controllers,
  helpers,
}) => {
  const authApi = router();

  const { bodyParsingMiddleware } = middlewares;
  const { validateBody } = bodyParsingMiddleware;

  const schemas = validations.authValidations;

  const { authControllers } = controllers;

  authApi.post(
    "/register",
    validateBody(schemas.register),
    authControllers.registerController
  );

  authApi.post(
    "/login",
    validateBody(schemas.login),
    authControllers.loginController
  );

  return authApi;
};
