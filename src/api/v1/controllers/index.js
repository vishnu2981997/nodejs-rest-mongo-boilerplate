const infoControllers = require('./info.controllers');

module.exports = function ({config, services, helpers}) {

    const instance = {};

    instance.infoControllers = infoControllers({config, services, helpers});

    return instance;
}