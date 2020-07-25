const getLocationCoordinates = require('../integration/get-location-coordinates')
const getUsers = require('../integration/get-users')
const getUsersByCoordinatesRequest = require('../requests/get-users-by-coordinates-request')
const getUsersByCity = require('../integration/get-users-by-city')
const getUsersByCityRequest = require('../requests/get-users-by-city-request')
const getUsersWithinRadius = require('../domain/get-users-within-radius')

module.exports = async function (req, res, next) {
  const location = req.params.location
  const radius = parseFloat(req.query.radius || 0)
  try {
    let users1InRange = []
    if (radius) {
      const coordinates = getLocationCoordinates(location)
      const request1 = getUsersByCoordinatesRequest(coordinates, radius)
      const users1 = await getUsers()
      users1InRange = getUsersWithinRadius(users1, request1.geocoordinate, request1.radius)
    }
    const request2 = getUsersByCityRequest(location)
    const users2 = await getUsersByCity(request2)
    const users = users1InRange.concat(users2)
    res.json(users)
  } catch (error) {
    next(error)
  }
}
