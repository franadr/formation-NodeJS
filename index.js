
var express = require('express');
var app = express();
var port = process.argv[2];
const MongoClient = require('./utils/mongodb');


MongoClient.connect((err,db) => {
    if(err){
        return new Error("Connection to db not possible :"+err);
    }



    app.listen(port,(err) => {

        if(err){
            console.error(`Impossible to start express serverr : ${err}`);
            return;
        }
            app.use(require('./middleware/logRequest'));                        //Logger
            app.use(express.json());                                            //Body parser
            app.use('/auth', require('./modules/auth/auth.router'));                                      
            app.use(require('./middleware/authValidation'));
            app.use('/heroes', require('./modules/heroes/heroes.router'));  
            app.use('/teams', require('./modules/teams/teams.router'));
            app.use(require('./middleware/errorHandler'));
        
    });

})



