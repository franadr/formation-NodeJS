const config = require('../config/dbconf');
const MongClient = require('mongodb');


let db = {};

module.exports = {
    database : () => {
        return db;
    },

    connect : (callback) => {
        MongClient.connect(`mongodb://${config.mongodb_host}:${config.mongodb_port}/${config.mongodb_database}`, (err,client) => {
            if(err){
                return callback(err);
            }
            db = client.db();
            return callback(null,db);
        })
    }
}