module.exports = ({
  config,
  router,
  middlewares,
  validations,
  controllers,
  helpers,
}) => {
  const infoApi = router();

  const { infoControllers } = controllers;

  infoApi.get("/", infoControllers.infoController);

  return infoApi;
};
