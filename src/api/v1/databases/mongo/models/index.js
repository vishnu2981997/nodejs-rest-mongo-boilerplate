const userModals = require('./user.models')

module.exports = function ({config, mongoose}) {
    const instance = {};

    instance.userModals = userModals({config, mongoose});

    return instance;
}