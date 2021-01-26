const createError = require('http-errors');

module.exports = function ({config}) {

    const instance = {};

    instance.apiResponse = (req, res, code, data) => {
        const response = {
            code: code,
            data: '',
            stack: ''
        };

        if (typeof data === 'string') {
            response.data = data;
        } else if (data.message) {
            response.data = data.message;
        }

        return res.status(500).json(response);
    }

    instance.errorHandler = (err, req, res, next) => {
        // switch (true) {
        //     case err.name === 'ValidationError':
        //         // mongoose validation error
        //         return res.status(400).json({message: err.message});
        //     case err.name === 'UnauthorizedError':
        //         // jwt authentication error
        //         return res.status(401).json({message: 'Unauthorized'});
        //     default:
        //
        // }
        return res.status(500).json({message: err.message});
    }

    instance.createError = createError;

    return instance;
}