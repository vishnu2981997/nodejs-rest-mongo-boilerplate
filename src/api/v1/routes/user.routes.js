module.exports = ({
  config,
  router,
  middlewares,
  validations,
  controllers,
  helpers,
}) => {
  const userApi = router();

  const { authMiddleware } = middlewares;
  const { verifyAccessToken } = authMiddleware;

  const { userControllers } = controllers;

  userApi.get(
    "/:userId",
    verifyAccessToken,
    userControllers.getUserByIdController
  );

  userApi.put(
    "/:userId",
    verifyAccessToken,
    userControllers.updateUserByIdController
  );

  return userApi;
};
