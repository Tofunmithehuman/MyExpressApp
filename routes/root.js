const express = require("express")
const router = express.Router()
const path = require('path')


router.get('/', async(req, res) => {
    try {
        res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
    } catch (e) {
        res.status(400).send(e.message);
    }
})

module.exports = router