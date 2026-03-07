function errorHandler(err, req, res, next) {

    console.error(err);

    const status = err.status || 500;
    const success = err.success || false;
    const message = err.message || "Internal server error";

    res.status(status).json({
        success: success,
        message: message,
        requestId: req.requestId || null
    });
}

module.exports = errorHandler;