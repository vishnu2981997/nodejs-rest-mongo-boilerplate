module.exports = ({ config, services, helpers }) => {
  const instance = {};

  const { asyncHelpers } = helpers;

  const { apiResponse, apiError, createError } = helpers.responseHelpers;

  const { userServices } = services;

  instance.getUserByIdController = asyncHelpers.catchAsync(
    async (req, res, next) => {
      const { userId } = req.params;
      return apiResponse(req, res, { message: userId });
    }
  );

  instance.updateUserByIdController = asyncHelpers.catchAsync(
    async (req, res, next) => {
      const { userId } = req.params;
      return apiResponse(req, res, { message: userId });
    }
  );

  return instance;
};
