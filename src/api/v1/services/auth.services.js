module.exports = function ({config, models, helpers}) {

    const instance = {}

    const {requestHelpers, cryptoHelpers} = helpers;

    const {bCryptCompare, jwtHash} = cryptoHelpers;

    instance.verifyPassword = async (password, hashedPassword) => {
        let result = {};

        try {
            result.data = await bCryptCompare(password, hashedPassword);
        } catch (err) {
            result.error = err;
        }

        return result;
    }

    instance.generateAccessToken = async (data) => {
        let result = {};

        try {
            result.data = await jwtHash(data, '6h');
        } catch (err) {
            result.error = err;
        }

        return result;
    }

    instance.generateRefreshToken = async (data) => {
        let result = {};

        try {
            result.data = await jwtHash(data, '24h');
        } catch (err) {
            result.error = err;
        }

        return result;
    }

    instance.generateForgotPasswordTokenService = async (req) => {
        let result = {};

        return result;
    }

    return instance;
}