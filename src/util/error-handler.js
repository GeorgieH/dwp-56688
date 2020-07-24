const { HttpError } = require('./http-errors')

module.exports = function (err, req, res, next) {
  const json = {
    status: 'error',
    message: err.message
  }

  if (err instanceof HttpError) {
    return res
      .status(err.statusCode)
      .json(json)
  }

  return res
    .status(500)
    .json(json)
}
