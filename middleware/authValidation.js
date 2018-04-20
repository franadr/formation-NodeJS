const jwt = require('jsonwebtoken');
const jwtconf = require('../config/jwt.json');

module.exports = (req, res, next) => {
    const jwtToken = req.headers.token; 
    if(!jwtToken){
        res.status(401);
        return next(new Error('Token missing'));
    }


    jwt.verify(jwtToken,jwtconf.secret,(err,decoded) => {
        if(err){
            res.status(403);
            return next(new Error('Token invalid'));
        }
        console.log ('auth success');
        return next();
    })
    
}