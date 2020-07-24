const express = require('express')
const router = express.Router()

const getUsersByCityHandler = require('./get-users-by-city-handler')

router.get('/city/:city/users', getUsersByCityHandler)

module.exports = router
