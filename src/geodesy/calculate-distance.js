/**
 * @desc
 * Calculates the distance between two points (expressed as GeoCoordinate instances) in metres.
 * Uses the Haversine formula, which assumes a spherical Earth (rather than a ellipsoidal one).
 * @see {@link http://www.movable-type.co.uk/scripts/latlong.html}
 * @param {GeoCoordinate} from - The point to calculate the distance from.
 * @param {GeoCoordinate} to - The point to calculate the distance to.
 */
function calculateDistance ({ latitude: lat1, longitude: lon1 }, { latitude: lat2, longitude: lon2 }) {
  const R = 6371e3 // metres
  const φ1 = lat1 * Math.PI / 180 // φ, λ in radians
  const φ2 = lat2 * Math.PI / 180
  const Δφ = (lat2 - lat1) * Math.PI / 180
  const Δλ = (lon2 - lon1) * Math.PI / 180

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // in metres
}

module.exports = calculateDistance
