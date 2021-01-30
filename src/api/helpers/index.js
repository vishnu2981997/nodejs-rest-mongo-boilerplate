const responseHelpers = require("./response.helpers");

module.exports = ({ config }) => {
  const instance = {};

  instance.responseHelpers = responseHelpers({ config });

  return instance;
};
