const { BadRequest } = require('../util/http-errors')

module.exports = function (city) {
  if (!city) {
    throw new BadRequest('Missing parameter: city')
  }
  return { city }
}
