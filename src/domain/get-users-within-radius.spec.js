const calculateDistance = require('../geodesy/calculate-distance')
const GeoCoordinate = require('../geodesy/geo-coordinate')
const getUsersWithinRadius = require('./get-users-within-radius')

jest.mock('../geodesy/calculate-distance')

describe('getUsersWithinRadius', () => {
  it('should get users within radius', () => {
    const userInRange = { latitude: 0, longitude: 0 }
    const userOutOfRange = { latitude: 0, longitude: 0 }
    const users = [userInRange, userOutOfRange]
    const from = new GeoCoordinate(0, 0)
    const radius = 10
    calculateDistance
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(15)
    const result = getUsersWithinRadius(users, from, radius)
    expect(result).toEqual([userInRange])
  })

  it('should allow strings as latitute and longitude values', () => {
    const userInRange = { latitude: '0', longitude: '0' }
    const userOutOfRange = { latitude: '0', longitude: '0' }
    const users = [userInRange, userOutOfRange]
    const from = new GeoCoordinate(0, 0)
    const radius = 10
    calculateDistance
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(15)
    const result = getUsersWithinRadius(users, from, radius)
    expect(result).toEqual([userInRange])
  })
})
