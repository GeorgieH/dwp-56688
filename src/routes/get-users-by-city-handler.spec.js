const getUsersByCity = require('../integration/get-users-by-city')
const getUsersByCityHandler = require('./get-users-by-city-handler')
const getUsersByCityRequest = require('../requests/get-users-by-city-request')

jest.mock('../integration/get-users-by-city')
jest.mock('../requests/get-users-by-city-request')

describe('getUsersByCityHandler', () => {
  it('should respond with users', async () => {
    const city = 'London'
    const request = { city }
    const users = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    getUsersByCityRequest.mockReturnValue(request)
    getUsersByCity.mockResolvedValue(users)
    const req = { params: request }
    const res = { json: jest.fn() }
    const next = jest.fn()
    await getUsersByCityHandler(req, res, next)
    expect(getUsersByCityRequest).toHaveBeenCalledWith(city)
    expect(getUsersByCity).toHaveBeenCalledWith(request)
    expect(res.json).toHaveBeenCalledWith(users)
    expect(next).not.toHaveBeenCalled()
  })

  it('should handle erroneous request', async () => {
    const city = 'London'
    const error = new Error('test')
    getUsersByCityRequest.mockImplementation(() => { throw error })
    const req = { params: { city } }
    const res = { json: jest.fn() }
    const next = jest.fn()
    await getUsersByCityHandler(req, res, next)
    expect(getUsersByCityRequest).toHaveBeenCalledWith(city)
    expect(getUsersByCity).not.toHaveBeenCalled()
    expect(res.json).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(error)
  })

  it('should handle erroneous API call', async () => {
    const city = 'London'
    const request = { city }
    const error = new Error('test')
    getUsersByCityRequest.mockReturnValue(request)
    getUsersByCity.mockRejectedValue(error)
    const req = { params: { city } }
    const res = { json: jest.fn() }
    const next = jest.fn()
    await getUsersByCityHandler(req, res, next)
    expect(getUsersByCityRequest).toHaveBeenCalledWith(city)
    expect(getUsersByCity).toHaveBeenCalledWith(request)
    expect(res.json).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(error)
  })

  it('should handle erroneous response', async () => {
    const city = 'London'
    const request = { city }
    const error = new Error('test')
    const users = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    getUsersByCityRequest.mockReturnValue(request)
    getUsersByCity.mockResolvedValue(users)
    const req = { params: request }
    const res = { json: jest.fn().mockImplementation(() => { throw error }) }
    const next = jest.fn()
    await getUsersByCityHandler(req, res, next)
    expect(getUsersByCityRequest).toHaveBeenCalledWith(city)
    expect(getUsersByCity).toHaveBeenCalledWith(request)
    expect(res.json).toHaveBeenCalledWith(users)
    expect(next).toHaveBeenCalledWith(error)
  })
})
