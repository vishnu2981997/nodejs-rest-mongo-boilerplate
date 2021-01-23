module.exports = function ({config}) {
    const instance = {};

    instance.catchAsync = (fn) => (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    };

    return instance;
}