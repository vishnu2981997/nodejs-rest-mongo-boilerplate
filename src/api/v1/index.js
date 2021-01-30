const mongoose = require("mongoose");
const routes = require("./routes");
let { helpers } = require("./helpers");
let middlewares = require("./middleware");
let services = require("./services");
let controllers = require("./controllers");
let models = require("./databases/mongo/models");

module.exports = function ({ config, router }) {
  const api = router();

  helpers = helpers({ config });
  middlewares = middlewares({ config, helpers });
  models = models({ config, mongoose });
  services = services({ config, models, helpers });
  controllers = controllers({ config, services, helpers });

  api.use("/v1", routes({ config, router, middlewares, controllers, helpers }));

  api.use(helpers.responseHelpers.errorHandler);

  return api;
};
