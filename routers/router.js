var express = require('express');

var router = express.Router()
var system = require('./system')
var images = require('./images')

router.use((req, res, next) => {
    next()
})

router.use(system)
router.use(images)

module.exports = router