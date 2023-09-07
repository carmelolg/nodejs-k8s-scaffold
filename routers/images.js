var express = require('express');
var router = express.Router()
const dotenv = require('dotenv');
dotenv.config();



router.get('/carmelolg', (req, res) => {
    console.log('Get my personal image at ' + new Date())

    res.setHeader('Cache-Control', 'public, max-age=600');
    res.setHeader('Content-Length', 1572864);

    res.sendFile('./static/me.jpg', { root: '.'});
})

module.exports = router
