const _ = require('lodash')

const MIN_LATITUDE = -90
const MAX_LATITUDE = 90
const MIN_LONGITUDE = -180
const MAX_LONGITUDE = 180

function getError (subject, min, max) {
  return new Error(`Invalid ${subject} - must be a number within the range [${min}, ${max}]`)
}

function withinBounds (subject, min, max) {
  return _.isFinite(subject) && subject >= min && subject <= max
}

class GeoCoordinate {
  constructor (latitude, longitude) {
    if (!withinBounds(latitude, MIN_LATITUDE, MAX_LATITUDE)) {
      throw getError('latitude', MIN_LATITUDE, MAX_LATITUDE)
    }
    if (!withinBounds(longitude, MIN_LONGITUDE, MAX_LONGITUDE)) {
      throw getError('longitude', MIN_LONGITUDE, MAX_LONGITUDE)
    }
    this.latitude = latitude
    this.longitude = longitude
  }
}

module.exports = GeoCoordinate
