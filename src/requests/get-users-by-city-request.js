const _ = require('lodash')
const { BadRequest } = require('../util/http-errors')

module.exports = function (city) {
  if (!_.isString(city)) {
    throw new BadRequest('Invalid parameter: city must be a string')
  }
  return { city }
}
