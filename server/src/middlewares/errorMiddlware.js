const handler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NOED_ENV === 'production' ? '🥞' : err.stack
    });

    next();
};

module.exports = handler;
