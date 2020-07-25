const getUsersByCityRequest = require('./get-users-by-city-request')
const { BadRequest } = require('../util/http-errors')

describe('getUsersByCityRequest', () => {
  it('should throw when city is missing', () => {
    const city = undefined
    expect(() => getUsersByCityRequest(city)).toThrow(BadRequest)
  })

  it('should return request object', () => {
    const city = 'London'
    const request = getUsersByCityRequest(city)
    expect(request.city).toEqual(city)
  })
})
