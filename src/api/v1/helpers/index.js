const asyncHelpers = require('./async.helpers');
const requestHelpers = require('./request.helpers');

module.exports = function ({config}) {

    const instance = {};

    instance.asyncHelpers = asyncHelpers({config});
    instance.requestHelpers = requestHelpers({config});

    return instance;
}