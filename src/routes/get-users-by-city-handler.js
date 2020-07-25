const getUsersByCity = require('../integration/get-users-by-city')
const getUsersByCityRequest = require('../requests/get-users-by-city-request')

module.exports = async function (req, res, next) {
  try {
    const request = getUsersByCityRequest(req.params.city)
    const users = await getUsersByCity(request)
    res.json(users)
  } catch (error) {
    next(error)
  }
}
