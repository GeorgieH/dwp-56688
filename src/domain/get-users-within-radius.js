const calculateDistance = require('../geodesy/calculate-distance')
const GeoCoordinate = require('../geodesy/geo-coordinate')

module.exports = function (users, from, radius) {
  const result = []
  for (const user of users) {
    const latitude = parseFloat(user.latitude)
    const longitude = parseFloat(user.longitude)
    const to = new GeoCoordinate(latitude, longitude)
    const distance = calculateDistance(from, to)
    if (distance <= radius) {
      result.push(user)
    }
  }
  return result
}
