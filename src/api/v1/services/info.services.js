module.exports = function ({config, helpers}) {

    const instance = {}

    const { requestHelpers } = helpers;

    instance.infoService = async (req) => {
        let result = {};

        try {
            result.data = requestHelpers.getIpAddress(req);
        } catch (err) {
            result.err = err;
        }

        return result;
    }

    return instance;
}