const express = require('express')
const { getMessage } = require('./services')

const app = express()

app.get('/', async (req, res) => {
  res.json(getMessage())
})

module.exports = app
