const getUsersWithinRadius = require('../domain/get-users-within-radius')
const getUsers = require('../integration/get-users')
const getUsersByCoordinatesRequest = require('../requests/get-users-by-coordinates-request')

module.exports = async function (req, res, next) {
  const { latitude, longitude, radius } = req.body
  try {
    const request = getUsersByCoordinatesRequest({ latitude, longitude }, radius)
    const users = await getUsers()
    const usersInRange = getUsersWithinRadius(users, request.geocoordinate, request.radius)
    res.json(usersInRange)
  } catch (error) {
    next(error)
  }
}
