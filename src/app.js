const express = require('express')
const logger = require('morgan')

const handleError = require('./util/error-handler')
const { NotFound } = require('./util/http-errors')
const router = require('./routes/index')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded())

app.use('/', router)

app.use((req, res, next) => {
  next(new NotFound(`Not found: ${req.path}`))
})

app.use(handleError)

module.exports = app
