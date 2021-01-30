module.exports = ({ config, services, helpers }) => {
  const instance = {};

  const { infoServices } = services;

  const { asyncHelpers } = helpers;

  const { apiResponse, apiError } = helpers.responseHelpers;

  instance.infoController = asyncHelpers.catchAsync(async (req, res, next) => {
    let result = {};
    result = await infoServices.infoService(req);
    if (result.error) {
      return apiError(req, res, result.error);
    }
    return apiResponse(req, res, {
      message: `Hello human. Request from IP address ${result.data} logged.`,
    });
  });

  return instance;
};
