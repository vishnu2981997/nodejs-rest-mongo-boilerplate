module.exports = ({ config, services, helpers }) => {
  const instance = {};

  const { asyncHelpers, responseHelpers } = helpers;

  const { apiResponse, apiError, createError } = responseHelpers;

  const { authServices } = services;
  const { userServices } = services;

  instance.registerController = asyncHelpers.catchAsync(
    async (req, res, next) => {
      let user = {};
      user = await userServices.getUserByEmail(req.body.email);
      if (user.error) {
        return apiError(req, res, user.error);
      }
      if (user.data) {
        return apiError(req, res, createError(422, "Email already exists."));
      }

      let registerUser = {};
      registerUser = await userServices.addUser(req.body);
      if (registerUser.error) {
        return apiError(req, res, registerUser.error);
      }

      return apiResponse(
        req,
        res,
        {
          message: "successfully signed up",
        },
        201
      );
    }
  );

  instance.loginController = asyncHelpers.catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const response = {};

    let user = {};
    user = await userServices.getUserByEmail(email);
    if (user.error) {
      return apiError(req, res, user.error);
    }
    response.user = {
      id: user.data._id.toString(),
      name: user.data.name,
    };

    let login = {};
    login = await authServices.verifyPassword(password, user.data.password);
    if (login.error) {
      return apiError(req, res, login.error);
    }
    if (!login) {
      return apiError(req, res, createError(401, "Invalid email / password"));
    }

    const tokenData = {
      email: user.data.email,
      name: user.data.name,
      id: user.data._id.toString(),
    };

    let accessToken = {};
    accessToken = await authServices.generateAccessToken(tokenData);
    if (accessToken.error) {
      return apiError(req, res, accessToken.error);
    }
    response.accessToken = accessToken.data;

    let refreshToken = {};
    refreshToken = await authServices.generateRefreshToken(tokenData);
    if (refreshToken.error) {
      return apiError(req, res, refreshToken.error);
    }
    response.refreshToken = refreshToken.data;

    return apiResponse(req, res, response);
  });

  return instance;
};
