const Hero = require('./heroes.class');
const database = require('../../ressources/superheroes.json');
const mongodb = require('../../utils/mongodb');
const collection = mongodb.database().collection('heroes');
const objId = require('mongodb').ObjectId;

const findAll = (callback) => {
    if(database.length == 0) {
        return callback("Impossible to retrieve super heroes");
    }

    collection.find({}).toArray((err,res) => {
        if(err) return new Error(`${err}`);
        return callback(null,res)
    })
    
    
}

const findById = (idHero,callback) => {
    if(database.length == 0) {
        return callback("Impossible to retrieve super heroes");
    }

    collection.findOne({"_id":objId(idHero)},(err,res) => {
        if(err) return callback(`${err}`,null);
        
        return callback(null,res)
    })
}
const deleteById = (idHero,callback) => {

    collection.deleteOne({"_id":objId(idHero)},null, (err,result) => {
        if(err) return callback("Can not delete "+err);
        return callback(null,result);
    })
    
}

const update = (idHero, hero,callback) => {
    collection.update({"_id" : objId(idHero)},hero, (err,hero) =>{
        if(err) return callback(err,null);
        return callback(null,hero)
    })

}

const insert = (hero, callback) => {
    collection.insert(hero, (err,res) => {
        if(err) return callback("error occured "+err);
        return callback();
    })
}

module.exports = {
    findAll:findAll,
    findById:findById,
    insert:insert,
    update:update,
    deleteById:deleteById
}

