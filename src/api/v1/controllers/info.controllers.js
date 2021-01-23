module.exports = function ({config, services, helpers}) {

    const instance = {};

    const infoServices = services.infoServices;

    const asyncHelpers = helpers.asyncHelpers;

    instance.infoController = asyncHelpers.catchAsync(async (req, res, next) => {
        let result = await infoServices.infoService(req);
        if (result.err) {
            return res.status(400).json({message: result.err});
        }
        return res.status(200).json({message: 'Hello human. Request from IP address ' + result.data + ' logged.'});
    });

    return instance;
}