const {
  HttpError,
  BadRequest,
  NotFound
} = require('./http-errors')

describe('HttpError', () => {
  it('should initialize with correct values', () => {
    const message = 'test message'
    const error = new HttpError(message)
    expect(error.message).toEqual(message)
    expect(error.statusCode).toEqual(500)
  })
})

describe('BadRequest', () => {
  it('should initialize with correct values', () => {
    const message = 'test message'
    const error = new BadRequest(message)
    expect(error.message).toEqual(message)
    expect(error.statusCode).toEqual(400)
  })
})

describe('NotFound', () => {
  it('should initialize with correct values', () => {
    const message = 'test message'
    const error = new NotFound(message)
    expect(error.message).toEqual(message)
    expect(error.statusCode).toEqual(404)
  })
})
