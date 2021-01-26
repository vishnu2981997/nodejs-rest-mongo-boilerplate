module.exports = function ({config, services, helpers}) {

    const instance = {};

    const infoServices = services.infoServices;

    const asyncHelpers = helpers.asyncHelpers;

    const {apiResponse} = helpers.responseHelpers;

    instance.infoController = asyncHelpers.catchAsync(async (req, res, next) => {
        let result = await infoServices.infoService(req);
        if (result.err) {
            return apiResponse(req, res, 400, result.err);
        }
        return apiResponse(req, res, 200, {message: 'Hello human. Request from IP address ' + result.data + ' logged.'})
    });

    return instance;
}