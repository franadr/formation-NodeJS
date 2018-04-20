const Joi = require('joi');

const heroSchema = Joi.object().keys({
    idHero : Joi.forbidden(),
    heroName : Joi.string().required().min(3),
    intelligence : Joi.number().integer().min(0).max(100).required(),
    strength : Joi.number().integer().min(0).max(100).required(),
    speed : Joi.number().integer().min(0).max(100).required(),
    power : Joi.number().integer().min(0).max(100).required(),
    combat : Joi.number().integer().min(0).max(100).required(),
    durability : Joi.number().integer().min(0).max(100).required(),
    fullName : Joi.string().min(3).required(),
    alignment : Joi.string().regex(/^(good|bad)$/).required(),
    gender : Joi.string().regex(/^(Male|Female)$/).required(),
    race : Joi.string().min(3).required(),


}
    
);

module.exports =heroSchema;