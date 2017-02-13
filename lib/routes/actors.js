const router = require('express').Router();
const Actor = require('../models/actors')

module.exports = router
    .get('/', (req, res) => {
        Actor.find()
            .then(actors => res.send(actors));
    });