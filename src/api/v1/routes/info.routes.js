module.exports = ({ config, router, middlewares, controllers, helpers }) => {
  const infoApi = router();

  const { infoControllers } = controllers;

  infoApi.get("/", infoControllers.infoController);

  return infoApi;
};
