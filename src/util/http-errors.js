class HttpError extends Error {
  constructor (message) {
    super()
    this.message = message
  }

  get statusCode () {
    if (this instanceof BadRequest) {
      return 400
    }

    if (this instanceof NotFound) {
      return 404
    }

    return 500
  }
}

class BadRequest extends HttpError { }
class NotFound extends HttpError { }

module.exports = {
  HttpError,
  BadRequest,
  NotFound
}
