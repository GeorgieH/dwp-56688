const errorHandler = require('./error-handler')
const { BadRequest } = require('./http-errors')

describe('ErrorHandler', () => {
  it('should return HttpError-based response', () => {
    const message = 'test message'
    const error = new BadRequest(message)
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    const response = errorHandler(error, null, res)
    expect(res.status).toHaveBeenCalledWith(error.statusCode)
    expect(res.json).toHaveBeenCalledWith({ status: 'error', message: error.message })
    expect(response).toEqual(res)
  })

  it('should return fallback response', () => {
    const message = 'test message'
    const error = new Error(message)
    const res = {}
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    const response = errorHandler(error, null, res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ status: 'error', message: error.message })
    expect(response).toEqual(res)
  })
})
