const infoServices = require('./info.services');

module.exports = function ({config, helpers}) {

    const instance = {};

    instance.infoServices = infoServices({config, helpers});

    return instance;
}