function logger(req, res, next) {

    res.on("finish", () => {

        console.log(
            `[${req.requestId}] ${req.method} ${req.originalUrl} ${res.statusCode} ${req.duration}ms`
        );
    });

    next();
}

module.exports = logger;