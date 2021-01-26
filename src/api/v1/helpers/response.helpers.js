const createError = require('http-errors');

module.exports = function ({config}) {

    const instance = {};

    const success = (req, res, code, data) => {
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

        return res.status(code).json(response);
    }

    const error = (req, res, code, data) => {
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

        return res.status(code).json(response);
    }

    instance.apiResponse = (req, res, code = 200, data) => {

        if (!(code >= 400)) {
            return error(req, res, code, data);
        } else {
            return success(req, res, code, data);
        }
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