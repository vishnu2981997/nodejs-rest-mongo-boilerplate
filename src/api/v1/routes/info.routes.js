module.exports = function ({ config, router, controllers, helpers }) {
  const infoApi = router();

  const { infoControllers } = controllers;

  infoApi.get("/", infoControllers.infoController);

  return infoApi;
};
