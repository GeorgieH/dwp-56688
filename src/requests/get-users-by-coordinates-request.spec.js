const getUsersByCoordinatesRequest = require('./get-users-by-coordinates-request')
const { BadRequest } = require('../util/http-errors')

describe('getUsersByCoordinatesRequest', () => {
  it('should handle invalid geo-coordinate', () => {
    const test = (coordinate, radius) => getUsersByCoordinatesRequest(coordinate, radius)
    expect(() => test({ latitude: 91, longitude: 0 }, 0)).toThrow(BadRequest)
    expect(() => test({ latitude: 0, longitude: 181 }, 0)).toThrow(BadRequest)
  })

  it('should handle invalid radius', () => {
    const test = (coordinate, radius) => getUsersByCoordinatesRequest(coordinate, radius)
    expect(() => test({ latitude: 0, longitude: 0 }, -1)).toThrow(BadRequest)
    expect(() => test({ latitude: 0, longitude: 0 }, Infinity)).toThrow(BadRequest)
    expect(() => test({ latitude: 0, longitude: 0 }, NaN)).toThrow(BadRequest)
  })

  it('should return request', () => {
    const coordinate = { latitude: 0, longitude: 0 }
    const radius = 0
    expect(getUsersByCoordinatesRequest(coordinate, radius)).toEqual({ geocoordinate: coordinate, radius })
  })
})
