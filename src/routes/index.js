const express = require('express')
const router = express.Router()

const getUsersByCoordinatesHandler = require('./get-users-by-coordinates-handler')
const getUsersByCityHandler = require('./get-users-by-city-handler')
const getUsersByLocationHandler = require('./get-users-by-location-handler')

router.post('/coordinates/users', getUsersByCoordinatesHandler)
router.get('/city/:city/users', getUsersByCityHandler)
router.get('/location/:location/users', getUsersByLocationHandler)

module.exports = router
