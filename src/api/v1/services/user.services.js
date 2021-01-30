module.exports = function ({ config, models, helpers }) {
  const instance = {};

  const { responseHelpers, cryptoHelpers } = helpers;

  const { createError } = responseHelpers;

  const { bCryptHash, jwtHash } = cryptoHelpers;

  const User = models.userModals.user;

  instance.getUserByEmail = async (email) => {
    const result = {};

    try {
      result.data = await User.findOne({ email });
    } catch (err) {
      result.error = err;
    }

    return result;
  };

  instance.addUser = async (data) => {
    const result = {};

    try {
      let user = {
        email: data.email,
        name: data.name,
        password: data.password,
      };

      user.password = await bCryptHash(user.password);

      user = new User(user);

      result.data = await user.save();
    } catch (err) {
      result.error = err;
    }

    return result;
  };

  instance.getUsers = async (req) => {
    const result = {};

    return result;
  };

  instance.getUser = async (req) => {
    const result = {};

    return result;
  };

  instance.updateUser = async (req) => {
    const result = {};

    return result;
  };

  instance.deleteUser = async (req) => {
    const result = {};

    return result;
  };

  return instance;
};
