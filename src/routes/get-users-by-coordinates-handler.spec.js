const getUsers = require('../integration/get-users')
const getUsersByCoordinatesHandler = require('./get-users-by-coordinates-handler')
const getUsersByCoordinatesRequest = require('../requests/get-users-by-coordinates-request')
const getUsersWithinRadius = require('../domain/get-users-within-radius')
const GeoCoordinate = require('../geodesy/geo-coordinate')

jest.mock('../integration/get-users')
jest.mock('../requests/get-users-by-coordinates-request')
jest.mock('../domain/get-users-within-radius')

describe('getUsersByCoordinatesHandler', () => {
  it('should respond with users', async () => {
    const latitude = 0
    const longitude = 0
    const radius = 0
    const request = { geocoordinate: new GeoCoordinate(latitude, longitude), radius }
    const users = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    getUsersByCoordinatesRequest.mockReturnValue(request)
    getUsers.mockResolvedValue(users)
    getUsersWithinRadius.mockReturnValue(users)
    const req = { body: { latitude, longitude, radius } }
    const res = { json: jest.fn() }
    const next = jest.fn()
    await getUsersByCoordinatesHandler(req, res, next)
    expect(getUsersByCoordinatesRequest).toHaveBeenCalledWith({ latitude, longitude }, radius)
    expect(getUsers).toHaveBeenCalled()
    expect(getUsersWithinRadius).toHaveBeenCalledWith(users, request.geocoordinate, request.radius)
    expect(res.json).toHaveBeenCalledWith(users)
    expect(next).not.toHaveBeenCalled()
  })

  it('should handle erroneous request', async () => {
    const latitude = 0
    const longitude = 0
    const radius = 0
    const error = new Error('test')
    getUsersByCoordinatesRequest.mockImplementation(() => { throw error })
    const req = { body: { latitude, longitude, radius } }
    const res = { json: jest.fn() }
    const next = jest.fn()
    await getUsersByCoordinatesHandler(req, res, next)
    expect(getUsersByCoordinatesRequest).toHaveBeenCalledWith({ latitude, longitude }, radius)
    expect(getUsers).not.toHaveBeenCalled()
    expect(getUsersWithinRadius).not.toHaveBeenCalled()
    expect(res.json).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(error)
  })

  it('should handle erroneous API call', async () => {
    const latitude = 0
    const longitude = 0
    const radius = 0
    const request = { geocoordinate: new GeoCoordinate(latitude, longitude), radius }
    const error = new Error('test')
    getUsersByCoordinatesRequest.mockReturnValue(request)
    getUsers.mockRejectedValue(error)
    const req = { body: { latitude, longitude, radius } }
    const res = { json: jest.fn() }
    const next = jest.fn()
    await getUsersByCoordinatesHandler(req, res, next)
    expect(getUsersByCoordinatesRequest).toHaveBeenCalledWith({ latitude, longitude }, radius)
    expect(getUsers).toHaveBeenCalled()
    expect(getUsersWithinRadius).not.toHaveBeenCalled()
    expect(res.json).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(error)
  })

  it('should handle erroneous range check', async () => {
    const latitude = 0
    const longitude = 0
    const radius = 0
    const request = { geocoordinate: new GeoCoordinate(latitude, longitude), radius }
    const error = new Error('test')
    const users = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    getUsersByCoordinatesRequest.mockReturnValue(request)
    getUsers.mockResolvedValue(users)
    getUsersWithinRadius.mockImplementation(() => { throw error })
    const req = { body: { latitude, longitude, radius } }
    const res = { json: jest.fn() }
    const next = jest.fn()
    await getUsersByCoordinatesHandler(req, res, next)
    expect(getUsersByCoordinatesRequest).toHaveBeenCalledWith({ latitude, longitude }, radius)
    expect(getUsers).toHaveBeenCalled()
    expect(getUsersWithinRadius).toHaveBeenCalledWith(users, request.geocoordinate, request.radius)
    expect(res.json).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(error)
  })

  it('should handle erroneous response', async () => {
    const latitude = 0
    const longitude = 0
    const radius = 0
    const request = { geocoordinate: new GeoCoordinate(latitude, longitude), radius }
    const error = new Error('test')
    const users = [
      { id: 1, first_name: 'Joe' },
      { id: 2, first_name: 'Fred' }
    ]
    getUsersByCoordinatesRequest.mockReturnValue(request)
    getUsers.mockResolvedValue(users)
    getUsersWithinRadius.mockReturnValue(users)
    const req = { body: { latitude, longitude, radius } }
    const res = { json: jest.fn().mockImplementation(() => { throw error }) }
    const next = jest.fn()
    await getUsersByCoordinatesHandler(req, res, next)
    expect(getUsersByCoordinatesRequest).toHaveBeenCalledWith({ latitude, longitude }, radius)
    expect(getUsers).toHaveBeenCalled()
    expect(getUsersWithinRadius).toHaveBeenCalledWith(users, request.geocoordinate, request.radius)
    expect(res.json).toHaveBeenCalledWith(users)
    expect(next).toHaveBeenCalledWith(error)
  })
})
