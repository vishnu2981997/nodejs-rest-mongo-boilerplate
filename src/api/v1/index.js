module.exports = function ({config, router}) {
    const api = router();

    const routes = require('./routes');
    const helpers = require('./helpers')({config});
    const services = require('./services')({config, helpers});
    const controllers = require('./controllers')({config, services, helpers});

    api.use('/v1', routes({config, router, controllers, helpers}));

    api.use(helpers.responseHelpers.errorHandler);

    return api;
}