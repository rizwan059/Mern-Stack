const { ValidationError } = require('joi');

const errorHandler = (error, req, res, next) => {
    let status = error.status || 500;
    let data = {
        message: error.message || "Internal Server Error"
    };

    // Joi validation error
    if (error instanceof ValidationError) {
        status = 400;
    }

    // Mongoose validation error
    if (error.name === "ValidationError") {
        status = 400;
        data.message = Object.values(error.errors).map(err => err.message).join(", ");
    }

    // Handle JSON parse errors (bad JSON input)
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        status = 400;
        data.message = "Invalid JSON format";
    }

    // Handle JWT errors
    if (error.name === "JsonWebTokenError") {
        status = 401;
        data.message = "Invalid token, please log in again";
    }

    // Log errors in development mode
    if (process.env.NODE_ENV === "development") {
        console.error(error);
    }

    return res.status(status).json(data);
};

module.exports = errorHandler;
