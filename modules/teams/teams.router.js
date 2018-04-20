const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.sendStatus(501);
})

router.get('/:idTeam', (req,res) => {
    res.sendStatus(501);
})

router.post('/', (req,res) => {
    res.sendStatus(501);
})

router.put('/:idTeam', (req,res) => {
    res.sendStatus(501);
})

router.delete('/:idTeam', (req,res) => {
    res.sendStatus(501);
})
module.exports = router;