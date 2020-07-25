const GeoCoordinate = require('../geodesy/geo-coordinate')

module.exports = function (location) {
  switch (location.toLowerCase()) {
    case 'london':
      return new GeoCoordinate(51.507351, -0.127758)
  }

  return null
}
