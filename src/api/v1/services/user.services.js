module.exports = function ({config, models, helpers}) {

    const instance = {}

    const {responseHelpers, cryptoHelpers} = helpers;

    const {createError} = responseHelpers;

    const {bCryptHash, jwtHash} = cryptoHelpers;

    const User = models.userModals.user;

    instance.getUserByEmail = async (email) => {
        let result = {};

        try {
            result.data = await User.findOne({email: email})
        } catch (err) {
            result.error = err;
        }

        return result;
    };

    instance.addUser = async (data) => {
        let result = {};

        try {
            let user = {
                email: data.email,
                name: data.name,
                password: data.password
            };

            user.password = await bCryptHash(user.password);

            user = new User(user);

            result.data = await user.save();
        } catch (err) {
            result.error = err;
        }

        return result;
    }

    instance.getUsers = async (req) => {
        let result = {};

        return result;
    }

    instance.getUser = async (req) => {
        let result = {};

        return result;
    }

    instance.updateUser = async (req) => {
        let result = {};

        return result;
    }

    instance.deleteUser = async (req) => {
        let result = {};

        return result;
    }

    return instance;
}