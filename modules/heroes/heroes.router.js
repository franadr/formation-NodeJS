const express = require('express');
const router = express.Router();
const heroesService = require('./heroes.service');
const joi = require('joi');
const heroSchema = require('./heroes.schema');
router.get('/', (req,res,next) => {

    heroesService.findAll( (err,heroesList) => {
    
        if(err){
            console.log(err);
            res.status(500);
            return next(new Error(`An error occured when retrieving heroes : ${err}`))
        }

        res.json(heroesList);
    })
})

router.get('/:idHero', (req,res,next) => {

    heroesService.findById(req.params.idHero, (err,hero) => {
        if(err){
            console.err(err);
            res.sendStatus(500);
            return;
        }

        if(!hero){
            res.status(404);
            return next(new Error('No hero found ...'));
        }
        res.json(hero);
    })
})

router.post('/', (req,res,next) => {
    joi.validate(req.body,heroSchema, (err,hero) => {
        if(err){
            res.status(500);
            return next(new Error('Hero do not correspond with schema '+err));
        }

        heroesService.insert(hero, (err) => {
            if(err) return next(new Error("Could not insert hero"+err));
            
            res.json(hero._id);

        });
    });

    
})

router.put('/:idHero', (req,res,next) => {
    joi.validate(req.body,heroSchema, (err,hero) => {
        if(err){
            res.status(400);
            return next(new Error('Hero do not correspond with schema'));
        }
        heroesService.update(req.params.idHero,hero, (err,hero) => {
            if(err) next(new Error(err));
            res.status(200);
            res.json(hero);
        })
        
    });

    
})

router.delete('/:idHero', (req,res,next) => {
    heroesService.deleteById(req.params.idHero,(err,result) => {
        if(err){
            res.status(500);
            next(err);
        } 
        res.sendStatus(200);

    })
})
module.exports = router;