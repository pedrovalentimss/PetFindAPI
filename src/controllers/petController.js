const express = require('express');

const Pet = require('../models/Pet');

const router = express.Router();

router.post('/', async (req, res) => {
    const pet = await Pet.create(req.body);         
    return res.send({ pet });
});

router.get('/', async (req, res) => {
    const pet = await Pet.find();

    res.send({ ok: true, pet });
});

module.exports = app => app.use('/pet', router); 