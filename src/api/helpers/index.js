const responseHelpers = require('./response.helpers');

module.exports = function ({config}) {

    const instance = {};

    instance.responseHelpers = responseHelpers({config});

    return instance;
};