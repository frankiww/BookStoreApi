function timing(req, res, next) {

    const start = Date.now();

    res.on("finish", () => {
        req.duration = Date.now() - start;
    });

    next();
}

module.exports = timing;