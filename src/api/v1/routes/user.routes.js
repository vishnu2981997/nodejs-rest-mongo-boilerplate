module.exports = ({ config, router, middlewares, controllers, helpers }) => {
  const userApi = router();

  const { userControllers } = controllers;

  const { authMiddleware } = middlewares;

  const { verifyAccessToken } = authMiddleware;

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
