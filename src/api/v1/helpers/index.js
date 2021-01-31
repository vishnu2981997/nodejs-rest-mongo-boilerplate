const { asyncHelpers } = require("./async.helpers");
const { requestHelpers } = require("./request.helpers");
const { responseHelpers } = require("./response.helpers");
const { cryptoHelpers } = require("./crypto.helpers");
const { loggingHelpers } = require("./logging.helpers");

module.exports.helpers = ({ config }) => {
  const instance = {};

  instance.asyncHelpers = asyncHelpers({ config });
  instance.requestHelpers = requestHelpers({ config });
  instance.responseHelpers = responseHelpers({ config });
  instance.cryptoHelpers = cryptoHelpers({ config });
  instance.loggingHelpers = loggingHelpers({ config });

  return instance;
};
