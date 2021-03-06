const axios = require('axios')
const getUrl = require('./get-url')

module.exports = async function ({ city }) {
  const response = await axios.get(getUrl(`city/${city}/users`), {
    accept: 'application/json'
  })
  return response.data
}
