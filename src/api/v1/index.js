const mongoose = require("mongoose");
const routes = require("./routes");
const validations = require("./validations");
let { helpers } = require("./helpers");
let middlewares = require("./middleware");
let services = require("./services");
let controllers = require("./controllers");
let models = require("./databases/mongo/models");
let utils = require("./utils");

module.exports = ({ config, router }) => {
  const api = router();

  utils = utils({ config });
  helpers = helpers({ config });
  models = models({ config, mongoose });
  middlewares = middlewares({ config, utils, helpers });
  services = services({ config, models, utils, helpers });
  controllers = controllers({ config, services, utils, helpers });

  api.use(middlewares.loggingMiddleware.generateUUID);

  api.use(middlewares.loggingMiddleware.getIpAddress);

  api.use(middlewares.loggingMiddleware.getUserAgent);

  api.use(middlewares.loggingMiddleware.getServiceName);

  api.use(middlewares.loggingMiddleware.initializeLogger);

  api.use(
    "/api/v1",
    routes({ config, router, middlewares, validations, controllers, helpers })
  );

  api.use(helpers.responseHelpers.errorHandler);

  return api;
};
