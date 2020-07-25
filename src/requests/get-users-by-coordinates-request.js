const _ = require('lodash')
const GeoCoordinate = require('../geodesy/geo-coordinate')
const { BadRequest } = require('../util/http-errors')

module.exports = function ({ latitude, longitude }, radius) {
  let g = null

  try {
    g = new GeoCoordinate(latitude, longitude)
  } catch (error) {
    throw new BadRequest(error.message)
  }

  if (!_.isFinite(radius) || radius < 0) {
    throw new BadRequest('Invalid parameter: radius must be a finite, non-negative number')
  }

  return { geocoordinate: g, radius }
}
