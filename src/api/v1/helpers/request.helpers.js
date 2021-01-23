module.exports = function ({config}) {
    const instance = {};

    instance.getIpAddress = (req) => {
        let result;

        try {
            result = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        } catch (err) {
            console.log(err);
        }

        return result;

    };

    return instance;
}