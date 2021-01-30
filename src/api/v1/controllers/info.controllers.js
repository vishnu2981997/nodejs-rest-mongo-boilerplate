module.exports = function ({config, services, helpers}) {

    const instance = {};

    const infoServices = services.infoServices;

    const asyncHelpers = helpers.asyncHelpers;

    const {apiResponse, apiError} = helpers.responseHelpers;

    instance.infoController = asyncHelpers.catchAsync(async (req, res, next) => {
        let result = await infoServices.infoService(req);
        if (result.hasOwnProperty('error')) {
            return apiError(req, res, result.error);
        }
        return apiResponse(req, res, {message: 'Hello human. Request from IP address ' + result.data + ' logged.'});
    });

    return instance;
}