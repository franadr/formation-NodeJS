const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtconf = require('../../config/jwt.json');



router.get('/',(req,res,next) => {
    const payload = {
        'userId' : -1,


    }


    jwt.sign(payload,jwtconf.secret, (err,token) => {
        if(err){
            res.status(500);
            return next(new Error('Impossible de create token'));
        }
        res.status(201);
        res.send(token);
    })
    
})


module.exports = router;