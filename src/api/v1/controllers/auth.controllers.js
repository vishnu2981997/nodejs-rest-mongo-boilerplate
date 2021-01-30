module.exports = function ({config, services, helpers}) {

    const instance = {};

    const asyncHelpers = helpers.asyncHelpers;

    const {apiResponse, apiError, createError} = helpers.responseHelpers;

    const authServices = services.authServices;
    const userServices = services.userServices;

    instance.registerController = asyncHelpers.catchAsync(async (req, res, next) => {

        const user = await userServices.getUserByEmail(req.body.email);
        if (user.hasOwnProperty('error')) {
            return apiError(req, res, user.error);
        }
        if (user.hasOwnProperty('data')) {
            return apiError(req, res, createError(422, 'Email already exists.'));
        }

        const registerUser = await userServices.addUser(req.body);
        if (registerUser.hasOwnProperty('error')) {
            return apiError(req, res, registerUser.error);
        }

        return apiResponse(req, res, {
            message: 'successfully signed up'
        }, 201);
    });

    instance.loginController = asyncHelpers.catchAsync(async (req, res, next) => {
        const {email, password} = req.body;
        const response = {};

        const user = await userServices.getUserByEmail(email);
        if (user.hasOwnProperty('error')) {
            return apiError(req, res, user.error);
        }
        response.user = {
            id: user.data._id.toString(),
            name: user.data.name,
        }

        const login = await authServices.verifyPassword(password, user.data.password);
        if (login.hasOwnProperty('error')) {
            return apiError(req, res, login.error);
        }
        if (!login) {
            return apiError(req, res, createError(401, 'Invalid email / password'));
        }

        const tokenData = {
            email: user.data.email,
            name: user.data.name,
            id: user.data._id.toString()
        };

        const accessToken = await authServices.generateAccessToken(tokenData);
        if (accessToken.hasOwnProperty('error')) {
            return apiError(req, res, accessToken.error);
        }
        response.accessToken = accessToken.data;

        const refreshToken = await authServices.generateRefreshToken(tokenData);
        if (refreshToken.error) {
            return apiError(req, res, refreshToken.error);
        }
        response.refreshToken = refreshToken.data;

        return apiResponse(req, res, response);
    });

    return instance;
}