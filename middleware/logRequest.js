module.exports = (req, res, next) => {
    let reqDate = new Date();
    console.log(`${reqDate} ${req.method} ${req.path}`);
    return next();
}