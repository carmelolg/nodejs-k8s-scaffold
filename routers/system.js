var express = require('express');
var router = express.Router()

const dotenv = require('dotenv');
dotenv.config();



router.get('/ping', (req, res) => {
    res.send(200);
})

module.exports = router
