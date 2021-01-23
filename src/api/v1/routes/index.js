const infoRoutes = require('./info.routes');

module.exports = function ({config, router, controllers, helpers}) {

    const api = router();

    api.use('/', infoRoutes({config, router, controllers, helpers}));

    return api;
}